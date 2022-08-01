import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../Context/Loading/loading-context";
import { GetAllMusic } from "../../Services/Music/music-service";

export default function Music() {
  let [image, setImage] = useState("");
  let [musicImg, setMusicImg] = useState([]);
  let [indexImg, setIndexImg] = useState(0);
  let { loading } = useContext(LoadingContext);

  useEffect(() => {
    GetAllMusic().then((res) => {
      setMusicImg(res.hits);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexImg === musicImg.length - 1) {
        indexImg = 0;
      } else {
        setImage(musicImg[indexImg].largeImageURL);
        indexImg++;
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [musicImg]);
  return (
    <>
      {image === "" ? (
        <img src={loading} alt="img" />
      ) : (
        <div>
          <h1>showing Music collection</h1>
          <img className="centerImg" src={image} alt="img" />
        </div>
      )}
    </>
  );
}
