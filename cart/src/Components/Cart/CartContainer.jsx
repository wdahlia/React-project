import React from 'react';
import styles from './CartContainer.module.css';
import CartItem from './CartItem';
import { useCartContext } from '../../Context/CartProvider';

export default function CartContainer() {
  const { cartItems, amount, total, handleReset } = useCartContext();

  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.title}>Cart Item</h1>
          <div className={styles.line}></div>
          { cartItems.map((data) => <CartItem key={data.id} data={data} className={styles.items}/>)}
        </div>
        <div className={styles.totalCount}><span>{amount}</span>개</div>
        <div className={styles.totalPrice}>$ {total}</div>
        <button className={styles.clearBtn} onClick={handleReset}>Clear Cart</button>
      </article>
    </section>
  );
}

// length가 0일때는 clear cart가 아닌 다른 문구가 나와야할듯..?
