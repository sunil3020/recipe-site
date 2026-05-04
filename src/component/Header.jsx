import React, { useState } from "react"
import logo from "../image/logo.png"
import "./Header.css"
import { useNavigate } from "react-router-dom"
import like from "../image/Like.png"
import Favorite from "./Favorite"
const Header=({recipename,recipedata,favorite})=>{

    const navigate=useNavigate();
    const[values,setValues]=useState("");
   

    const handelsearch=(e)=>{
        const input=e.target.value;
        setValues(input);
        const filterdis=recipename.filter((p)=>{return(p.toLowerCase().includes(input.toLowerCase()))})
       
    }

    const handelclick=(p)=>{
        const select=recipedata.filter((i)=>(i.name.includes(p)))
        console.log(p);
        const val=select;
        
        navigate(`/detail/${val[0].id}`)
        
    }
    const change=()=>{
        alert("change")
    }

    
    return(
        <div id="header">
            <div id="l-left">
                <img src={logo} alt="" />
                <p><span id="orage">Flavoe</span> Fusion</p>
            </div>
            <div id="l-right">
                <nav>
                    <a href="">Home</a>
                    <a href="">Recipe</a>
                    <a href="">Meal Plans</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <img src={like} alt="" id="like" onClick={()=> navigate("/favorite")}/>
                    
                    <div id="search">
                        <input type="text" name="" id="" value={values} onChange={handelsearch}/>

                        <button>search</button><span id="count">{favorite?.length()}</span>

                        {values && recipename.filter(p=>(p.toLowerCase().includes(values.toLowerCase()))).map((p,index)=>(<li key={index} onClick={()=>handelclick(p)}>{p}</li>))}

                    </div>
                    
                </nav>
            </div>
           
            
        </div>
        
    )
}
export default Header;