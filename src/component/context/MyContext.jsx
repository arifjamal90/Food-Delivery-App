import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../../../public/assets/assets';
export const UserContext = createContext();

const MyContext = ({ children }) => {
    const [displayFood, setDisplayFood] = useState(food_list);
    const [activeCardIndex, setActiveCardIndex] = useState(null);
    const [cartItem, setCartItem] = useState({});

// user form code here---------------------
    const[user,setUser]=useState({
        Fname:'',
        Lname:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipcode:'',
        phone:'',
    })
const Inputhandle=(e)=>{
    e.preventDefault()
  const {name, value}=e.target;
   setUser({...user, [name]: value})

}
console.log(user);

const  postValue= async(e)=>{
    e.preventDefault()
    const { Fname, Lname, email, street, city, state, zipcode, phone}=user

    const res= await fetch("https://food-delivery-app-b9e8c-default-rtdb.firebaseio.com/Food-Delivery-App.json",
    {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Fname,
            Lname,
            email,
            street,
            city,
            state,
            zipcode,
            phone,
        }),
    }
    )
    if(res){
        setUser({
            Fname:'',
            Lname:'',
            email:'',
            street:'',
            city:'',
            state:'',
            zipcode:'',
            phone:'',
        })
        alert("Data Stored Successfully!")
    }
} ; 



//  this code for add cart item------------------------

    const addCartItem = (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

     
    };
 
//  this code for remove cart item------------------------
    
    const removeFromCartItem = (itemId) => {
        setCartItem(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const handleCardClick = (index)=> {
        setActiveCardIndex(index === activeCardIndex ? index : index);
        setActiveCardIndex(index);
    };

   useEffect(()=>{
   },[cartItem])

//  this code for filter category --------------
   const filterCategory = (item) => {
    if (item.menu_name === 'All View') {
        setDisplayFood(food_list);
        setCategory('');
    } else {
        const filteredItem = food_list.filter((currentItem) => {
            return item.menu_name === currentItem.category;
        });
        setDisplayFood(filteredItem);
        setCategory(item.menu_name);
    }
};

//  this code for  add amount deliveryfee cartitem------------------------

const getTotalCartAmount = () => {
    let totalAmount = 0;

    Object.keys(cartItem).forEach(itemId => {
        if (cartItem[itemId] > 0) {
            let infoItem = food_list.find(product => product._id === itemId);
            totalAmount += infoItem.price * cartItem[itemId];
        }
    });

    return totalAmount;
};

//  this code for add total cartitem------------------------
let countVal = Object.values(cartItem);
let totalCount = countVal.reduce((acc, currentValue) => acc + currentValue, 0);






    const counterJSX = (index) => (
        activeCardIndex === index && (
            !cartItem[index]
                ? <img className="add" onClick={() => addCartItem(index)} src="../../assets/add_icon_white.png" alt="Add" />
                : <div className="food-item-counter">
                    
                        <img className="remove-icon" onClick={() => removeFromCartItem(index)} src="../../assets/remove_icon_red.png" alt="Remove" />
                        <p>{cartItem[index]}</p>
                        <img className="add-icon" onClick={() => addCartItem(index)} src="../../assets/add_icon_green.png" alt="Add" />
                    
                </div>
        )
    );



    return (
        <UserContext.Provider value={{ displayFood, counterJSX, handleCardClick,filterCategory, cartItem,removeFromCartItem,getTotalCartAmount,cartItem,totalCount,Inputhandle,user,postValue }}>
            {children}
        </UserContext.Provider>
    );
};

export default MyContext;
