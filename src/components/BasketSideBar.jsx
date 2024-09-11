import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import { useDispatch } from "react-redux";

import { checkout } from "../features/cartSlice/cartSlice";

import styles from "./BasketSideBar.module.css";

function BasketSideBar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending.."}</span>
      </div>
      <button onClick={() => dispatch(checkout(state))}>Checkout</button>
    </div>
  );
}

export default BasketSideBar;
