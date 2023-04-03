import React from 'react';
import './Button.css';

export default function Button({ value }) {
  // 각각의 button 컴포넌트가 onclick 되었을때 그 값을 map돌면서 해당 idx만 classList add 해주는 방식으로 가져가면 될듯
  return (
    <button 
      className='btn px-px px-4 py-py py-2 rounded-xl' 
      type='button'>
        {value}
    </button>
  );
}

