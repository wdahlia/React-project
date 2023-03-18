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
}

export default reducer