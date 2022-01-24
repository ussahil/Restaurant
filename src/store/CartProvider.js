import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCardState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItem = state.item.concat(action.item);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItem,
      totalAmount: updatedTotalAmount,
    };
    //creates a new array
  }

  return defaultCardState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCardState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
//use case for context if you have to pass it to various places eg-cartValue is used in order main site ets
//manager of context
