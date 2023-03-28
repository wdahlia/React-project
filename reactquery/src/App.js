import './App.css';
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';


const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" }, 
]

export default function App() {
  console.log(POSTS)

  const queryClient = useQueryClient();
  const [value, setValue] = useState();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS])
    // 대체적으로는 then 뒤에는 fetch나, axios와 같은 값들이 들어오게됨
  });

  const mutation = useMutation({
    mutationFn: (title) => {
      return wait(1000).then(() => POSTS.push({ id: crypto.randomUUID(), title }))
    },
    onSuccess: () => queryClient.invalidateQueries(['posts']),
    retry: 2,
    // 기본 default 값이 3번이기 때문
  })
  // 값을 push하는 것에 성공했다면,

  // useQuery 사용시 오류 발생 재 렌더링의 기본 default 값은 triple times
  // 3번 무조건 재 렌더링 즉, 오류가 나도 3번은 재 fetch 해온다라는 소리 retry로 렌더링 횟수 지정 가능

  if (postsQuery.isLoading) return <h1>...Loading</h1>

  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>
  }

  return (
    <div className='todosBox'>
      { postsQuery.data.map(post => (
        <div className='todo' key={post.id}>{post.title}</div>
      ))}
      <form onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate(value);
        const inputValue = document.getElementById('input')
        inputValue.value = '';
      }}>
        <input id='input' placeholder='할 일을 입력하세요....' onChange={(e) => setValue(e.target.value)}/>
        <button className='btn' type='submit'>Send</button>
      </form>
    </div>
  );
}

// 만약에 if (postsQuery)를 사용해서 무언가 표현하지 않았다면 default 값으로는 JSX 문법이 return 되게 됨

function wait(sec) {
  return new Promise(resolve => setTimeout(resolve, sec))
}

// setTimeOut을 직접 사용해서 그 안에서 콜백함수를 선언하는 방법도 존재하나
