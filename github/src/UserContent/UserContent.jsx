import React from 'react';
import data from '../data';
import styles from './UserContent.module.css';

export default function UserContent() {
  return (
    <div className={styles.container}>
      <img src={data.avatar_url} className={styles.img} />
      <div className={styles.userBox}>
        <h1>{data.login}</h1>
        <a href={data.html_url} className={styles.userPage}>@{data.login}</a>
        <div className={styles.accountInfo}>
          <div classNmae={styles.box}>
            <p>repos</p>
            <p className={styles.num}>{data.public_repos}</p>
          </div>
          <div classNmae={styles.box}>
            <p>followings</p>
            <p className={styles.num}>{data.public_repos}</p>
          </div>
          <div classNmae={styles.box}>
            <p>followers</p>
            <p className={styles.num}>{data.public_repos}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

