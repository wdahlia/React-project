import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import items from '../data';
import reducer from '../Reducer/reducer';
// Nav, Cart에 모두 Cart에 대한 상태 정보들이 뿌려지게 됨으로
// Context API 활용해야함
const CartContext = createContext();

const url = 'https://course-api.com/react-useReducer-cart-project'
const initialState = {
  loading: false, // url fetch 해올때 걸리는 시간 동안 loading 표시 나타내 줄 것
  cartItem: items,
  total: 0,
  count: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // reducer를 dispatch 할 수 있게끔 하는 콜백 함수들 선언해줄 곳

  return (
    <CartProvider.Provider>
      { children }
    </CartProvider.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}


export { CartContext, CartProvider }