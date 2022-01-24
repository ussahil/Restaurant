import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
