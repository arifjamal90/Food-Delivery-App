import React, { useContext } from "react";
import { UserContext } from "../context/MyContext";
import "./Cart.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItem, removeFromCartItem, displayFood,getTotalCartAmount} = useContext(UserContext);
  const navigetor= useNavigate()


  return (
    <div className="cart">
      <div className="cart_item">
        <div className="cart-item_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {displayFood.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id} className="cart-item_title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <button
                  onClick={() => removeFromCartItem(item._id)}
                  className="cross"
                >
                  Delete
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-detils">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-detils">
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className="cart-total-detils">
            <b>Total</b>
            <b>${getTotalCartAmount()+2}</b>
          </div>
          <button onClick={()=> navigetor('/placeorder')}>PROCEED TO CHECKOUT</button>
        </div>
      
      <div className="cart-promocode">
        <p>If you have a promo code, enter it here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="Promo code" />
          <button>Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
