import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../Context/Loading/loading-context";
import { GetAllSport } from "../../Services/Sport/sport-service";

export default function Music() {
  let [image, setImage] = useState("");
  let [sportImg, setSportImg] = useState([]);
  let [indexImg, setIndexImg] = useState(0);
  let { loading } = useContext(LoadingContext);

  useEffect(() => {
    GetAllSport().then((res) => {
      setSportImg(res.hits);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexImg === sportImg.length - 1) {
        indexImg = 0;
      } else {
        setImage(sportImg[indexImg].largeImageURL);
        indexImg++;
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [sportImg]);
  return (
    <>
      {image === "" ? (
        <img src={loading} alt="img" />
      ) : (
        <div>
          <h1>showing Sport collection</h1>
          <img className="centerImg" src={image} alt="img" />
        </div>
      )}
    </>
  );
}
