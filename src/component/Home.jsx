import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Main_content from './Main_content'
import Favorite from './Favorite'
import Footer from './Footer.'


const Home = ({setfav}) => {
    const [recipename,setRecipename]=useState(null);
    const [recipedata,setRecipedata]=useState([]);
    const [favorite,setFavorite]=useState([]);
    useEffect(()=>{setfav(favorite)},[favorite])
      
  return (
    <>
    <Header recipename={recipename} recipedata={recipedata} favorite={favorite} />
    <Banner />
    <Main_content setrecipename={setRecipename} setrecipedata={setRecipedata} setfavorite={setFavorite} favorite={favorite} />
    <Footer/>
    </>
  )
}

export default Home