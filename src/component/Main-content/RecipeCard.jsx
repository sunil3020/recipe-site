//import image from "../../image/burger.webp"
import "./RecipeCard.css"
import Rating from "./Rating";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const RecipeCard=({detail,setfavorite,favorite})=>{
const navigate=useNavigate();


const favorites=(p)=>{

    const exist=favorite.some((i)=>i.id==p.id)

        if(exist){
            alert("alreday in favorite list")
        }else{
            setfavorite(previtem=>[...previtem,p])
        }

}
 if (!detail) {
        return <div>Loading...</div>;
    } 
    return( 
       
        <div>
            
            <div id="RecipeCard">
                
                {detail.map((p)=>(
                    <div key={p.id} className="eachcard"  >
                    
                            <img src={p.image} alt="" className="R-image"/>
                            <p>{p.name}</p>
                            <Rating rcount={p.reviewCount} rating={p.rating}/>
                            <button onClick={()=>navigate(`/detail/${p.id}`)}>Detail</button>
                            <button onClick={()=>favorites(p)}>Add to Favorite</button>
                        
                    </div>
                ))}
                
            </div>
           
        </div>
    );
}
export default RecipeCard;