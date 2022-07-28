import { useEffect, useState } from "react";
import { GetAllPhotos } from "../../Services/Photos/photos-service";

  
  export default function Home() {
    // let [category, setCategory] = useState(["sport","music","food"]);
    let [image, setImage] = useState("");
    let [allImg, setAllImg] = useState([]);
    let [indexImg, setIndexImg] = useState(0);

    useEffect(() => {
      GetAllPhotos().then((res) => {
        setAllImg(res.hits);
    });
}, []);
console.log(allImg);
    useEffect(() => {
      const interval = setInterval(() => {
        if (indexImg === allImg.length - 1 ) {
            indexImg=0;
          console.log("image :" ,image);
        } else {
          setImage(allImg[indexImg].largeImageURL);
          indexImg++
          console.log(indexImg);
          console.log("image :" ,image);
        }
      }, 3000);
  
      return () => {
              clearInterval(interval);     
      };
    }, [allImg]);
  
    return (
      <div>
      <h1>showing All collection</h1>
        <img className="centerImg" src={image} style={{ width: "100%" }} alt="img" />    
      </div>
    );
  }
