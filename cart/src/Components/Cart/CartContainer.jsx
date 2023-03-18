import React, { useState } from 'react';
import styles from './CartContainer.module.css';
import data from '../../data';
import CartItem from './CartItem';

export default function CartContainer() {
  const dataList = data;
  const [list, setList] = useState(dataList);

  const handleDelete = (k) => {
    setList(list.filter((li) => (li.id !== k)));
  }

  const handleReset = () => {
    setList([]);
  }

  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <h1 className={styles.title}>Cart Item</h1>
        <div className={styles.line}></div>
        { list.map((data) => <CartItem key={data.id} id={data.id} data={data} onDelete={handleDelete}/>)}
        <button className={styles.clearBtn} onClick={handleReset}>Clear Cart</button>
      </article>
    </section>
  );
}

// length가 0일때는 clear cart가 아닌 다른 문구가 나와야할듯..?
