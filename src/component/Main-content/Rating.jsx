const Rating=({rcount,rating})=>{

    const star=[];

    for(var i=1;i<=5;i++){
        if(i<=Math.floor(rating)){
            star.push(<span key={i}>★</span>)
        }else if(i===Math.ceil(rating) && rating%1>=0.5){
            star.push(<span key={i}>⯨</span>)
        }else{
            star.push(<span key={i}>☆</span>)
        }
    }

    return(
        <div>
            {star}<span>{rating.toFixed(1)} / 5</span> <p>{rcount} reviews</p>
        </div>
    )
}
export default Rating;