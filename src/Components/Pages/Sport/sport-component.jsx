import { useEffect, useState } from "react";
import { GetAllSport } from "../../Services/Sport/sport-service";

  
  export default function Music() {
    let [image, setImage] = useState("");
    let [sportImg, setSportImg] = useState([]);
    let [indexImg, setIndexImg] = useState(0);
    let loading="https://i.pinimg.com/originals/ac/40/2f/ac402f57b35961d66cfbee27472c65a3.gif";

    useEffect(() => {
      GetAllSport().then((res) => {
        setSportImg(res.hits);
    });
}, []);
console.log(sportImg);
    useEffect(() => {
      const interval = setInterval(() => {
        if (indexImg === sportImg.length - 1 ) {
            indexImg=0;
          console.log("image :" ,image);
        } else {
          setImage(sportImg[indexImg].largeImageURL);
          indexImg++
          console.log(indexImg);
          console.log("image :" ,image);
        }
      }, 3000);
  
      return () => {
              clearInterval(interval);     
      };
    }, [sportImg]);
  
    return (
      <>
      {
        image===""?
        <img src={loading} alt="img" />:<div>
      <h1>showing Sport collection</h1>
        <img className="centerImg" src={image} alt="img" />    
      </div>
      }
      
      </>
    );
  }
