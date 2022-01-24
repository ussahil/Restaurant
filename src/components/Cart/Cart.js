import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
const Cart = (props) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;

  const hasItems = cardCtx.item.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className={style["cart-items"]}>
      {cardCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.onClose} className={style["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
