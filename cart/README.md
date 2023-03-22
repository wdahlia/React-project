
# Cart
<br>

![ezgif-4-be937260bf](https://user-images.githubusercontent.com/108653518/226877890-a1643619-5c77-475e-8e40-f5d7d1c1d8f3.gif)

<br>

### Cart Component 구성
- API 로딩 될 때, loading: true로 변경, loading 표시 출력
- Context API 사용 - `CartProvider.js`
	- fetch해온 데이터 자식 컴포넌트내에서 사용할 수 있게끔
	- reducer에서 실행시킬 함수 변수에 할당해서 자식 컴포넌트에서 사용할 수 있게끔
- `reducer.js`
  - action에 따른 함수들 정의
  - 전체 state 관리
- `Nav` 
	- logo
		- `pointer: default`로 설정
	- Cart Icon + 상품 총 개수
- `Section`
	- `CartContainer`
		- `CartItem` 컴포넌트 사용
		- 상품 총 개수, 상품
	- `CartItem`
		- 상품 사진, 상품 이름, 상품 가격, 상품 삭제 버튼
		- 상품 개수 증가, 감소 버튼 
			- 클릭 시, Nav에 있는 상품 총 개수와 CartContainer 내부에 있는 총 개수 역시 감소되어야함
<br>

### reduce, reduceRight
	sort, every, some, find, findIndex, includes도 reduce로 구현 가능
1. reduce
	- 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값)
2. reduceRight
	- 요소 순회를 오른쪽부터 왼쪽으로 돈다