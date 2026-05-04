import { useEffect, useState } from "react";
import Filter from "./Main-content/Filter";
import RecipeCard from "./Main-content/RecipeCard";
import "./Main_content.css"

const Main_content=({setrecipename,setrecipedata,setfavorite,favorite})=>{
    const [data,setData]=useState(null);
    const [filter,setFilter]=useState( {cuisine:"",
                                    difficulty:"",
                                    mealType:"",
                                    Totaltime:"",
                                    caloriesPerServing:"",
                                    rating:""
});

    useEffect(()=>{const fetchrecipes=async()=>{
        let res= await fetch("https://dummyjson.com/recipes");
        let  datas= await res.json();
        setData(datas);
        setrecipedata(datas.recipes);
        }
    fetchrecipes();
},[]);

const filterdata=data?.recipes?.filter((p)=>{

    const totaltime=p.prepTimeMinutes+p.cookTimeMinutes;
    return((!filter.cuisine || p.cuisine ==filter.cuisine)&&
            (!filter.difficulty || p.difficulty==filter.difficulty)&&
            (!filter.mealType||p.mealType.includes(filter.mealType))&& 
            (!filter.Totaltime || filter.Totaltime==totaltime)&&
            (!filter.caloriesPerServing ||filter.caloriesPerServing==p.caloriesPerServing)&&
            (!filter.rating||filter.rating<=p.rating))});
            

    return(
        <div id="Main_content">
            <div id="filter-left">

                <Filter tag={data} setFilter={setFilter} setrecipename={setrecipename}/>  
            </div>   
            <div id="filter-right">

                <RecipeCard detail={filterdata} setfavorite={setfavorite} favorite={favorite} />
            </div>
        </div>
    );
   
}
export default Main_content;

