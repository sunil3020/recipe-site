import { useState } from "react";

const Favorite=({fav,setfav})=>{
    const removedata=(id)=>{
        setfav(previtem=>previtem.filter(e=>e.id !== id))
    }
    
    return(
        <>
        {fav.map((p)=>(
            <div key={p.id}>
                <img src={p.image} alt="" />
                <p>{p.name}</p>
                <Rating/>            
            <button onClick={()=>{removedata(p.id)}} >delete</button>
            </div>
            
        ))}

        </>
    );
}
export default Favorite;