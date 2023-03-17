import React from 'react';
import styles from './CartContainer.module.css';
import data from '../../data';
import CartItem from './CartItem';

export default function CartContainer() {
  const dataList = data;
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Cart Item</h1>
      <div className={styles.line}></div>
      { dataList.map((data) => <CartItem key={data.id} data={data}/>)}
      <button className={styles.clearBtn}>Clear Cart</button>
    </section>
  );
}

// length가 0일때는 clear cart가 아닌 다른 문구가 나와야할듯..?
