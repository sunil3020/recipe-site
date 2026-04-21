import React, { useEffect, useState } from "react";
import "../Main-content/Filter.css"


const Filter=({tag,setFilter,setrecipename})=>{

   const cuisine = [...new Set(tag?.recipes?.map(r=>r.cuisine))].sort();
   const MealType=[...new Set(tag?.recipes?.flatMap(r=>r.mealType))];
   const Totaltime=[...new Set(tag?.recipes?.map((r)=>(r.prepTimeMinutes+r.cookTimeMinutes)))].sort();
   const Calories=[...new Set(tag?.recipes?.map(r=>(r.caloriesPerServing)))].sort();
   const rating=[1,2,3,4,5];

    const names=tag?.recipes?.map(p=>p.name);

    useEffect(()=>setrecipename(names),[tag]);
   

    // console.log(names);
   const change=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;

    setFilter((prev)=>({...prev,[name]:value}))
   
   }
   

    return(
        <div id='filter'>
            <h3>Filter</h3>
            <label htmlFor="">Cuisine</label>
            <select name="cuisine" id="" onChange={change}>
                <option value="">none</option>
                {cuisine.map((p,index)=>(<option key={index} value={p}>{p}</option>))}
            </select>

            <label htmlFor="">Difficulty</label>
            <select name="difficulty" id="" onChange={change}  >
                <option value="">none</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            <label htmlFor="">Meal Type</label>
            <select name="mealType" id="" onChange={change}>
                <option value="">none</option>
                {MealType.map((p,index)=>(<option key={index} value={p}>{p}</option>))}
            </select>

            <label htmlFor="">Time Limit</label>
            <select name="Totaltime" id="" onChange={change}>
                <option value="">none</option>
                {Totaltime.map((p,index)=>(<option key={index}value={p}>{p}</option>))}
            </select>

            <label htmlFor="">Calories</label>
            <select name="caloriesPerServing" id="" onChange={change}>
                <option value="">none</option>
                {Calories.map((p,index)=>(<option key={index} value={p}>{p}</option>))}
            </select>

            <label htmlFor="">Rating</label>
            <select name="rating" id="" onChange={change}>
                <option value="">none</option>
                {rating.map((p,index)=>(<option key={index} value={p}>{p}</option>))}
            </select>
        </div>

    );

}
export default Filter;

