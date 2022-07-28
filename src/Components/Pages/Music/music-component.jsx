import { useEffect, useState } from "react";
import { GetAllMusic } from "../../Services/Music/music-service";
  
  export default function Music() {
    let [image, setImage] = useState("");
    let [musicImg, setMusicImg] = useState([]);
    let [indexImg, setIndexImg] = useState(0);
    let loading="https://i.pinimg.com/originals/ac/40/2f/ac402f57b35961d66cfbee27472c65a3.gif";

    useEffect(() => {
      GetAllMusic().then((res) => {
        setMusicImg(res.hits);
    });
}, []);
console.log(musicImg);
    useEffect(() => {
      const interval = setInterval(() => {
        if (indexImg === musicImg.length - 1 ) {
            indexImg=0;
          console.log("image :" ,image);
        } else {
          setImage(musicImg[indexImg].largeImageURL);
          indexImg++
          console.log(indexImg);
          console.log("image :" ,image);
        }
      }, 3000);
  
      return () => {
              clearInterval(interval);     
      };
    }, [musicImg]);
  
    return (
      <>
      {
        image===""?
        <img src={loading} alt="img" />:<div>
      <h1>showing Music collection</h1>
        <img className="centerImg" src={image} alt="img" />    
      </div>
      }
      
      </>
    );
  }
