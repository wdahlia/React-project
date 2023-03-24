import React from 'react';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { useUserContext } from '../Context/UserContext';

export default function SearchBar() {
  const { handleChange } = useUserContext();
  return (
    <div className={styles.box}>
      <FiSearch className={styles.icon}/>
      <input 
        type='text' 
        onChange={(e) => handleChange(e.target.value)} 
        placeholder='Search Github username...' 
        className={styles.searchBar} />
    </div>
  )
}

