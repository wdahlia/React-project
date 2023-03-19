const reducer = (state, action) => {
  // action type이 RESET일 떄
  if ( action.type === 'RESET' ) {
    return { ...state, cartItems: [], };
  }

  // action type이 CHANGE_AMOUNT일 떄  
  if ( action.type === 'CHANGE_AMOUNT' ) {
    let newCart = state.cartItems.map((item) => {
      if (item.id === action.data.id) {
        if (action.data.cmd === 'inc') {
          return { ...item, amount: item.amount + 1 }
        }
        else {
          if ( item.amount > 0 )
          return { ...item, amount: item.amount - 1 }
        }
      }
      return item
    })
    return { ...state, cartItems: newCart }
  }

  // action type이 DELET일 때
  if ( action.type === 'DELETE' ) {
    let remainItems = state.cartItems.filter((item) => (item.id !== action.data ));
    return { ...state, cartItems: remainItems }
  }

  // action type이 GET_TOTALS일 때
  if ( action.type === 'GET_TOTALS' ) {
    let { total, amount } = state.cartItems.reduce((cartTotal, getItems) => {
      // console.log(cartTotal); 누적값 즉 { total: 0, amount: 0}
      const { price, amount } = getItems;
      const totalPrice = price * amount
      
      cartTotal.total += totalPrice
      cartTotal.amount += amount

      return cartTotal
    }, {
      total : 0,
      amount : 0,
    } // initial 값 
  )
  total = total.toFixed(2);
  return { ...state, total, amount }
  }
}

export default reducer