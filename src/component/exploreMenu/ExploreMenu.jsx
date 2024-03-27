import React, { useContext, useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../public/assets/assets'
import { UserContext } from '../context/MyContext'

const ExploreMenu = ({category,setCategory}) => {
  const {filterCategory,}= useContext(UserContext)
  const [active,setActive]=useState(true)
 
  return (
    <div className='explore-menu' id="explore-menu">
      <h2>Explore our menu</h2>
      <p>
     choose a diverse menu  featuring a delectable array of dishes .Our mission is to satisfy your careving and elevate your dining expreince one delicious meat at a time.
      </p>
      <div className="explore-meu-list">
       {
        menu_list.map((item,index)=>{
            return (
              
              <div key={index}>  
                <div onClick={()=> filterCategory(item)} className="explore-menu-list-item">
                <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
               
                </div>           
              
              </div>

            
            )
        })
       }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
