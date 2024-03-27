import React, { useContext } from "react";
import "./FoodDisplay.css";
import { UserContext } from "../context/MyContext";

const FoodDisplay = ({category}) => {
  const { displayFood, counterJSX, handleCardClick, } = useContext(UserContext);

  return (
    <div className="foo-display" id="foo-display">
    <div className="top-menu">
    <h2>Top dishes near you</h2>
    
    </div>
   
      <div className="food-display-list">
        {displayFood.map((item, index) => {
          
            return (
              <div className="allimages-wrapper" key={index} onClick={() => handleCardClick(index)}>
                <div className="display-item-list-image">
                  <img className="item-images" src={item.image} alt="" />
                   <p className="counterjsx">{counterJSX(index)}</p> 
                </div>
                
                <div className="food-item-info">
                  <div className="food-item-name">{item.name}</div>
                  <img className="food-item-rating" src="../../assets/rating_starts.png" alt="" />
                </div>
                <div className="food-item-discription">
                  <>
                    <p className="food-item-disc">{item.description}</p>
                    <p className="food-item-price">$ {item.price}</p>
                  </>
                </div>
              </div>
            );
          
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
