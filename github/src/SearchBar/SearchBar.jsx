import React from 'react';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  return (
    <div className={styles.box}>
      <FiSearch className={styles.icon}/>
      <input type='text' placeholder='Search Github username...' className={styles.searchBar}/>
    </div>
  )
}

