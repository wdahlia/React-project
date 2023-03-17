import './App.css';
import CartContainer from './Components/Cart/CartContainer';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <CartContainer />
    </div>
  );
}

export default App;

// Context API 사용해서 내려줄 정보
// Reducer 사용할 예정 모든 것에 일일히 useReducer을 사용할 수 없으니
// 변수 지정해서 다른 컴포넌트에 내려주기
