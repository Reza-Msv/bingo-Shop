import { MdDeleteOutline } from "react-icons/md";
import { shortenTitle } from "../helper/helper";
import { useDispatch } from "react-redux";

import {
  removeItem,
  decrease,
  increase,
} from "../features/cartSlice/cartSlice";

import styles from "./Basket.module.css";

function Basket({ data }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenTitle(data.title)}</p>
        <div className={styles.actions}>
          {data.quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {data.quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          <span>{data.quantity}</span>
          <button onClick={() => dispatch(increase(data))}>+</button>
        </div>
      </div>
    </>
  );
}

export default Basket;
