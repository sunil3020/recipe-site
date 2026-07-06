import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from "../Header"
import Footer from "../Footer."
import "./Detail.css"


const Detail = ({fav,setfav}) => {
    const {id}=useParams();
    const navigate=useNavigate()
   
    const [value,setValue]=useState(null);
    useEffect(()=>{
        const fetchid=async()=>{
            const res=await fetch(`https://dummyjson.com/recipes/${id}`);
            const data= await res.json();
            setValue(data);
            console.log(data);
        }
        fetchid();
    },[id])
     if (!value) {
        return <div>Loading...</div>;
    } 
    const favorites=(p)=>{
       

    const exist=fav.some((i)=>i.id==p.id)

        if(exist){
            alert("alreday in favorite list")
        }else{
            setfav(previtem=>[...previtem,p])
        }

}
  return (
    <div className="detailcard"> 
                 <Header/>
                 
                    <div id='image-container'>
                        <div id='blur'>
                            <img src={value.image}alt=""  />
                        </div>
                        <div id='original'>
                            <div>
                                <img src={value.image} alt=""  />
                                <h1>{value.name}</h1>
                            </div>
                        </div>
                    </div>
                    <div id='flex-apply'>
                    <div id="detail-left">
                                
                            <div id='overview'>
                                
                                <div>
                                
                                <h4>Difficulty: {value.difficulty}</h4>
                                
                                <h4>Rating: {value.rating} stars ({value.reviewCount}reviews)</h4>
                                 
                            </div>
                            <div>
                                <h4>Servings:{value.servings}</h4>
                                <h4>Cuisine: {value.cuisine}</h4>
                            </div>
                        </div>
                            <h3>Ingredients</h3>
                            <ul>{value.ingredients.map((p,index)=>(<li key={index}>{p}</li>))}</ul>
                            
                            <h3>Instructions</h3>
                            <ol>{value.instructions.map((p,index)=>(<li key={index}>{p}</li>))}</ol>
                        
                
                      </div>

                <div id="detail-right">
                    <h3>Nuterition info</h3>
                    <h5>calories Per Serving:{value.caloriesPerServing}</h5>
                    <h3>Tags</h3>
                    <ul >{value.tags.map((p,index)=>((<li key={index}>{p}</li>)))}</ul>
                </div> 
                </div>
                <div id='detail-btn'>
                    <div>
                        <button onClick={()=>navigate(-1)} >close</button>
                        <button onClick={()=>favorites(value)} >add to Favorite</button>
                    </div>
                </div>
                <Footer/>
            </div>
            
  )
}

export default Detail