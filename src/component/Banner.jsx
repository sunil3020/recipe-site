import burger from '../image/burger.webp'
import "./Banner.css"

const Banner=()=>{
    return(
        <>
        <div id='full-banner'>
            <div>
                <div id='img'>
                    <img src={burger} alt="" id='banner'/>
                </div>
                <div id='word'>
                    <p>Discover <br />Your Next culinary <br />Adventure</p>
                    <button >Explore recipes</button>
                </div>
            </div>
        </div>
        </>
    );

}
export default Banner