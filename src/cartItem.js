import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import "./css/CartStyle.css";
export const CartItem = (props) => {
  const { id, productName, productPrice, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt=""/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${productPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
