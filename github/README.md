
# Search Github User

배포 URL [https://lively-seahorse-c0928f.netlify.app]
<br>

![ezgif-5-25bf1eb6ed](https://user-images.githubusercontent.com/108653518/227513668-910cc666-607e-4fc9-a066-a9dea91576cb.gif)

<br>

### Components

- Context API
	- Change Light Mode & Dark Mode
	- darkMode와 userInfo state 관리 
	- handleChange, handleToggle, state값 자식 컴포넌트로 내려주기
  - `handleChange`
  	- onChange 이벤트 발생 시
  	- axios로 request 요청 보내서 해당 user 값 받아오기
  	- error 발생 시 `검색 결과가 없습니다` 출력
<br>

- SearchBar 
  - useUserContext 사용하여 handleChange 함수 onChange 이벤트 추가
<br>

- userContent
	- UserContent 정보 보여줄 부분 생성
	- userInfo에 값이 true, false일 경우 보여줄 컴포넌트 분리
