import { useSelector } from "react-redux";
import Basket from "../components/Basket";
import BasketSideBar from "../components/BasketSideBar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((p) => (
          <Basket key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
