import burger from '../image/burger.webp'
import "./Banner.css"
const Banner=()=>{
    return(
        <>
        <div id='img'>
            <img src={burger} alt="" id='banner'/>
        </div>
        <div id='word'>
            <p>Discover <br />Your Next culinary <br />Adventure</p>
            <button >explore recipes</button>
        </div>
        </>
    );

}
export default Banner