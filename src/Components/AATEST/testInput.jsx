import { useEffect, useState } from "react";
import { GetAllPhotos } from "../../Services/Photos/photos-service";

export default function InputCheck() {
  // let [category, setCategory] = useState(["sport","music","food"]);
  let [image, setImage] = useState("");
  let [allImg, setAllImg] = useState([]);
  let [indexImg, setIndexImg] = useState(0);
  let [loading, setLoading] = useState(false);
  let [user, setUser] = useState();

  useEffect(() => {
    GetAllPhotos().then((res) => {
      setAllImg(res.hits);
    });
  }, []);
  console.log(allImg);
  function CheckWord(event) {
    setUser(event.target.value);
    console.log(event.target.value);
  }
  function sameUser(e) {
    allImg.filter(
      (user) => user.user.toLowerCase().indexOf(e.target.value) > -1
    );
  }
  return (
    <>
      <div>
        <input type="text" onChange={CheckWord} />
        <button onClick={sameUser}>click</button>
        <h1>showing All collection</h1>
        <img
          className="centerImg"
          src={image}
          style={{ width: "100%" }}
          alt="img"
        />
      </div>
    </>
  );
}

//   collections: 1
// comments: 31
// downloads: 5777
// id: 7341841
// imageHeight: 3712
// imageSize: 6603133
// imageWidth: 5568
// largeImageURL: "https://pixabay.com/get/g4cf428e9c87db2018530970ed22c7d24237faf71350d5810b0365fbfb71a746b0d017f8d92f8e984eeece4f6be3568b89a42cd872095640960593aebe94fd762_1280.jpg"
// likes: 54
// pageURL: "https://pixabay.com/photos/sea-ocean-coast-shore-home-cala-7341841/"
// previewHeight: 100
// previewURL: "https://cdn.pixabay.com/photo/2022/07/24/15/16/sea-7341841_150.jpg"
// previewWidth: 150
// tags: "sea, ocean, coast"
// type: "photo"
// user: "ELG21"
// userImageURL: "https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg"
// user_id: 3764790
// views: 5893
// webformatHeight: 427
// webformatURL: "https://pixabay.com/get/g3eb1e62a8dd92c00fbdc6671130f1b79ed4ddb7a58cf0dc6d3de6d61a607f6d47202d17f1ef59ea85a7caebf6549177ffb162ec2faa5bed927bbfba975d2790a_640.jpg"
// webformatWidth: 640
