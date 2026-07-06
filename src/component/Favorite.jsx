import { useState } from "react";
import Rating from "./Main-content/Rating";
import "./favorite.css"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer..jsx"
import Header from "./Header";
const Favorite=({fav,setfav})=>{
    const navigate=useNavigate()
    const removedata=(id)=>{
        setfav(previtem=>previtem.filter(e=>e.id !== id))
    }
    
    return(
        <>
        <Header/>
        {fav.map((p)=>(
            <div key={p.id} className="fav-card">
                <img src={p.image} alt="" />
                <p>{p.name}</p>
                <Rating rcount={p.reviewCount} rating={p.rating}/> 
                
                <div id="btn">           
                    <button onClick={()=>{removedata(p.id)}} >delete</button>
                    <button onClick={()=>navigate(`/detail/${p.id}`)}>detail</button>
                </div>
            </div>
        
            
        ))}
        <Footer/>
        </>
    );
}
export default Favorite;