import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import items from '../data';
import reducer from '../Reducer/reducer';
// Nav, Cart에 모두 Cart에 대한 상태 정보들이 뿌려지게 됨으로
// Context API 활용해야함
const CartContext = createContext();

// const url = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
  loading: false, // url fetch 해올때 걸리는 시간 동안 loading 표시 나타내 줄 것
  cartItems: items,
  total: 0,
  amount: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // reducer를 dispatch 할 수 있게끔 하는 콜백 함수들 선언해줄 곳

  // 상품 전체 삭제
  const handleReset = () => {
    dispatch({ type: 'RESET' })
  }

  // 상품 삭제
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', data: id })
  }
  
  // 상품 개수 변경
  const changeAmount = (id, cmd) => {
    dispatch({ type: 'CHANGE_AMOUNT', data: { id, cmd } })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })

  }, [state.cartItems])

  return (
    <CartContext.Provider 
      value={{ 
        ...state, 
        handleReset, 
        handleDelete, 
        changeAmount,
      }}>
      { children }
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}


export { CartContext, CartProvider }