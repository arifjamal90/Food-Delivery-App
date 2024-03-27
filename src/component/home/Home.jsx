import React, { useState } from 'react'
import "./Home.css"
import Header from '../Header/Header'
import ExploreMenu from '../exploreMenu/ExploreMenu'
import FoodDisplay from '../foodDisplay/FoodDisplay'
import AppDowload from '../AppDownload/AppDowload'



const Home = () => {

    const [category,setCategory]=useState("All")

  

  return (
    <div>
      <Header/>
      
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay/>
      <AppDowload/>
    </div>
  )
}

export default Home
