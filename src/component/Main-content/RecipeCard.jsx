//import image from "../../image/burger.webp"
import "./RecipeCard.css"
import Rating from "./Rating";
import { useState } from "react";

const RecipeCard=({detail})=>{

const [value,setValue]=useState(null)

 if (!detail) {
        return <div>Loading...</div>;
    }
    const handel=(e)=>{
            
       setValue(e);
    }
    
    return( 
        <div>
            <div id="RecipeCard">
                
                {detail.map((p)=>(
                    <div key={p.id} className="eachcard" onClick={()=>handel(p)}>
                    
                            <img src={p.image} alt="" className="R-image"/>
                            <p>{p.name}</p>
                            <Rating rcount={p.reviewCount} rating={p.rating}/>
                            <button>Add to Favorite</button>
                        
                    </div>
                ))}
                
            </div>
            {value && <div className="detailcard"> 
                <div id="deteil-left">
                <img src={value.image} alt="" />
                <h2>overview</h2>
                <br />
                <h4>difficulty: {value.difficulty}</h4>
                
                <h4>rating: {value.rating} stars ({value.reviewCount}reviews)</h4>
                <br />
                <h3>Ingredients</h3>
                <ul>{value.ingredients.map((p)=>(<li>{p}</li>))}</ul>
                <br />
                <h3>Instructions</h3>
                <ol>{value.instructions.map((p)=>(<li>{p}</li>))}</ol>
                <br />
                
                </div>

                <div id="detail-right">
                <h3>Nuterition info</h3>
                <h5>calories Per Serving:{value.caloriesPerServing}</h5>
                <h3>Tags</h3>
                <ol>{value.tags.map((p=>(<li>{p}</li>)))}</ol>
                <button onClick={()=>setValue(null)} >close</button>
                <button>add to Favorite</button>
                </div>
            </div>}
        </div>
    );
}
export default RecipeCard;