import React from 'react';
import { useCartContext } from '../../Context/CartProvider';
import styles from './CartItem.module.css';

export default function CartItem({ data }) {
  const { handleDelete, changeAmount } = useCartContext();
  // const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount(count+1)
  // }

  // const handleDecrease = () => {
  //   if (count > 0) {
  //     setCount(count-1)
  //   }
    
  // }
  return (
    <div className={styles.container}>
      <div className={styles.itemInfo}>
        <img src={data.img} alt={data.img} className={styles.img} />
        <div className={styles.itemContent}>
          <h5 className={styles.title}>{data.title}</h5>
          <p className={styles.price}>$ {data.price}</p>
          <button className={styles.remove} onClick={() => handleDelete(data.id)}>Remove</button>
        </div>
      </div>
      <div className={styles.counter}>
        <button className={styles.decrease} onClick={() => changeAmount(data.id, 'dec')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
          </svg>
        </button>
        <div className={styles.count}>{data.amount}</div>
        <button className={styles.increase} onClick={() => changeAmount(data.id, 'inc')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

