import React, { useContext } from "react";
import "./PlaceOrderd.css";
import { UserContext } from "../context/MyContext";
const PlaceOrderd = () => {
  const { getTotalCartAmount, user,Inputhandle,postValue} = useContext(UserContext);
  return (
    <>
      <form className="palace-order" method="POST">
        <div className="palace-order-left">
          <div className="title">Delivery Information</div>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="First Name"
              name="Fname"
              value={user.Fname}
              autoComplete="off"
              required
              onChange={Inputhandle}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="Lname"
              value={user.Lname}
              autoComplete="off"
              required
              onChange={Inputhandle}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={user.email}
            autoComplete="off"
            required
            onChange={Inputhandle}
          />
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={user.street}
            autoComplete="off"
            required
            onChange={Inputhandle}
          />
          <div className="multi-fields">
            <input
              type="text"
              placeholder="City"
              name="city"
              value={user.city}
              autoComplete="off"
              required
              onChange={Inputhandle}
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              value={user.state}
              autoComplete="off"
              required
              onChange={Inputhandle}
            />
          </div>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="Zip Code"
              name="zipcode"
              value={user.zipcode}
              autoComplete="off"
              required
              onChange={Inputhandle}
            />
            <input type="text" placeholder="Country" name="country" />
          </div>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            autoComplete="off"
            required
            className="arif"
            onChange={Inputhandle}
          />
          <button onClick={postValue}>Submit</button>
        </div>
        

        <div className="palace-order-right">
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
              <b>${getTotalCartAmount() + 2}</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrderd;
