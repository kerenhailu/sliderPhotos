import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../Context/Loading/loading-context";
import { GetAllFood } from "../../Services/Food/food-service";

export default function Food() {
  let [image, setImage] = useState("");
  let [foodImg, setFoodImg] = useState([]);
  let [indexImg, setIndexImg] = useState(0);
  let { loading } = useContext(LoadingContext);

  useEffect(() => {
    GetAllFood().then((res) => {
      setFoodImg(res.hits);
    });
  }, []);
  console.log(foodImg);
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexImg === foodImg.length - 1) {
        indexImg = 0;
        console.log("image :", image);
      } else {
        setImage(foodImg[indexImg].largeImageURL);
        indexImg++;
        console.log(indexImg);
        console.log("image :", image);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [foodImg]);
  return (
    <>
      {image === "" ? (
        <img src={loading} alt="img" />
      ) : (
        <div>
          <h1>showing Food collection</h1>
          <img className="centerImg" src={image} alt="img" />
        </div>
      )}
    </>
  );
}
