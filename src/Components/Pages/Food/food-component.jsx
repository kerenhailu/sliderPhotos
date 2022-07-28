import { useEffect, useState } from "react";
import { GetAllFood } from "../../Services/Food/food-service";
  
  export default function Food() {
    let [image, setImage] = useState("");
    let [foodImg, setFoodImg] = useState([]);
    let [indexImg, setIndexImg] = useState(0);
let loading="https://i.pinimg.com/originals/ac/40/2f/ac402f57b35961d66cfbee27472c65a3.gif";
    useEffect(() => {
      GetAllFood().then((res) => {
        setFoodImg(res.hits);
    });
}, []);
console.log(foodImg);
    useEffect(() => {
      const interval = setInterval(() => {
        if (indexImg === foodImg.length - 1 ) {
            indexImg=0;
          console.log("image :" ,image);
        } else {
          setImage(foodImg[indexImg].largeImageURL);
          indexImg++
          console.log(indexImg);
          console.log("image :" ,image);
        }
      }, 3000);
  
      return () => {
              clearInterval(interval);     
      };
    }, [foodImg]);
  
    return (
      <>
      {
        image===""?
        <img src={loading} alt="img" />:<div>
      <h1>showing Food collection</h1>
        <img className="centerImg" src={image} alt="img" />    
      </div>
      }
      
      </>
    );
  }
