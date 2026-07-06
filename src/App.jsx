import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './component/Main-content/Detail'

import Main_content from './component/Main_content'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home' 
import Favorite from './component/Favorite'


function App() {
  const [fav,setFav]=useState(()=>{
    const store=localStorage.getItem("fav");
    return store? JSON.parse(store) : [];
  });

  useEffect(()=>{
    localStorage.setItem("fav",JSON.stringify(fav));
  },[fav])


  const router=createBrowserRouter([{
    path:"/",
    element:<Home setfav={setFav}/>
  },
  {
    path:"/detail/:id",
    element:<Detail fav={fav} setfav={setFav}/>
  },{
     path:"/favorite",
    element:<Favorite fav={fav} setfav={setFav}/>
  }
],{
    basename:"/recipe-site"
  })

  
  return (
    
   <>

    <RouterProvider router={router}/>
      
   </>
  )
}

export default App
