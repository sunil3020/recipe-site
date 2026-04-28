import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Banner from './component/banner'
import Main_content from './component/Main_content'
import { createBrowserRouter } from 'react-router-dom'


function App() {
  
  const [recipename,setRecipename]=useState(null);
  const [recipedata,setRecipedata]=useState([]);
  
  
  
  return (
    
   <>
    <Header recipename={recipename} recipedata={recipedata} />
    <Banner />
    <Main_content setrecipename={setRecipename} setrecipedata={setRecipedata}  />
      
   </>
  )
}

export default App
