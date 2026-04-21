import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Banner from './component/banner'
import Main_content from './component/Main_content'


function App() {
  
  const [recipename,setRecipename]=useState(null);
 

  return (
    
   <>
    <Header recipename={recipename}/>
    <Banner />
    <Main_content setrecipename={setRecipename}/>
      
   </>
  )
}

export default App
