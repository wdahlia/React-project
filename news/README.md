# News

### News API
- `Top headlines`
  - 나라의 주요 뉴스 헤드라인을 가져옴, 기사들은 최신 순으로 정렬되어 응답됨
  - **apiKey**
    - parameter로 전달 HTTP request header에 `X-Api-Key`로 전달
  - **country**
    - 어느 나라 기사의 헤드라인들을 가져오고 싶은지
    - us로 전달
  - **category**
    - *business*
    - *entertainment*
    - *general*
    - *health*
    - *science*
    - *sports*
    - *technology*
  - **pageSize** 
    - 40개 전달


### React Query 사용
  - Button 컴포넌트에 onClick 이벤트 되면 e.target.innerText로 해당 category 값 tab에 저장
  - tab에 있는 값 params의 category 프로퍼티의 value에 전달
  - 또한 useQuery 내부 category 말고도 tab 넣어줘서 데이터 캐싱해서 관리
  - staleTime은 api 제한 있어서 fresh 데이터로 시간 20분으로 관리 해 놓음
  - 오류 발생시 retry값은 3번이 default이나 2번으로 조정
  - data에 response.data.articles 부분만 저장
  - category 밑에 isLoading 컴포넌트 isError 컴포넌트 메시지 관리 위해, 삼항 연산자 사용하여 표시


### Styled Components 사용
  - Button 컴포넌트 `MORE DETAIL` 부분과 `Category` 부분이 겹치나 
    - 스타일이 다르기에 styled Components 라이브러리 사용

  ```javascript

      export default function Button({ children, ...props }) {
        return (
          <StyledButton {...props}>
              { children }
          </StyledButton>
        );
    }
  ```
  - 컴포넌트 내부에 컴포넌트가 존재하는 것이므로 prop다시 전달해주어야함
  - 여러개의 props 존재하는 경우 `{ ...props }` 형식으로 보내줄 수 있음
  - styled Components가 먹지 않는 오류 존재했으나 해당 create-react-app이 아닌 외부 폴더에 패키지 설치했었던 문제