import React, { useContext } from "react"
import products from "./ProductsArray";
import { ShopContext } from "./shop-context";
import { CartItem } from "./cartItem";
import { useNavigate } from "react-router-dom";
import "./css/CartStyle.css";
export default function Cart(){
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
  
    const navigate = useNavigate(); 
      return(
    <div className="CartArea">
        <h4>Your Cart:</h4>
        <div>
            {
                products.map((n) => {
                    if(cartItems[n.id] !== 0){
                        return <CartItem data={n}/>
                    }} )
            }
        </div>
        {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/Men")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
)}
