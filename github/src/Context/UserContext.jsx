import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export default function UserProvider({ children }) {

  const [state, setState] = useState({
    darkMode: false,
    userInfo: '',
  })

  // const URL = 'https://api.github.com/users/'
 
  const handleChange = (inputValue) => {
    
    let value = inputValue;

    const API_KEY = process.env.REACT_APP_GITHUB_TOKEN;

    axios({
      url: `https://api.github.com/users/${value}`,
      auth: `${API_KEY}`,
      method : 'GET',
      
    }).then((res) => {
      // console.log(res.data)
      return setState({ ...state, userInfo : res.data })
    }).catch((error)=> {
      // console.log(error)
      return setState({ ...state, userInfo : false })
    })
  }

  const handleToggle = () => {
    setState({ ...state, darkMode: !state.darkMode });
    changeMode(!state.darkMode);
  }




  return (
    <UserContext.Provider 
      value={{ ...state, handleChange, handleToggle }}>
      {children}
    </UserContext.Provider>
  )
}


function changeMode(mode) {
  if (mode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useUserContext = () => useContext(UserContext);

