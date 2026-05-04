import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from "../Header"

const Detail = () => {
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
  return (
    <div className="detailcard"> 
                 <Header/>
                 <div id="deteil-left">
                <img src={value.image} alt="" />
                <h2>overview</h2>
                <br />
                <h4>difficulty: {value.difficulty}</h4>
                
                <h4>rating: {value.rating} stars ({value.reviewCount}reviews)</h4>
                <br />
                
                <h3>Ingredients</h3>
                <ul>{value.ingredients.map((p,index)=>(<li key={index}>{p}</li>))}</ul>
                <br />
                <h3>Instructions</h3>
                <ol>{value.instructions.map((p,index)=>(<li key={index}>{p}</li>))}</ol>
                <br />
                
                </div>

                <div id="detail-right">
                <h3>Nuterition info</h3>
                <h5>calories Per Serving:{value.caloriesPerServing}</h5>
                <h3>Tags</h3>
                <ol>{value.tags.map((p,index)=>((<li key={index}>{p}</li>)))}</ol>
                <button onClick={()=>navigate(-1)} >close</button>
                <button >add to Favorite</button>
                </div> 
            </div>
  )
}

export default Detail