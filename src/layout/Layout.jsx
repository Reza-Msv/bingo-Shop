import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  console.log(state);
  
  return (
    <>
      <header className={styles.header}>
        <Link to="/bingo-shop">Bingo Shop</Link>
        <Link to="/bingo-shop/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Reza Msv</p>
      </footer>
    </>
  );
}

export default Layout;
