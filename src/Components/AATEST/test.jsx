import { useEffect, useState } from "react";
import { GetAllFood } from "../Services/Food/food-service";

// const images = [aa, aa2, aa3, aa4];

export default function ImageSwapper() {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [food, setFood] = useState([]);

    useEffect(() => {
      GetAllFood().then((res) => {
        setFood(res.hits);
    });
}, []);
console.log(food);
    useEffect(() => {
        // GetAllFood().then((res) => {
        //     setFood(res.hits);
        //     console.log(res.hits);
        //   });
        const intervalId = setInterval(() => {
            if(currentIndex === food.length - 1) {
                setCurrentIndex(0);
                console.log(currentIndex);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
                console.log(currentIndex);
                 
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <h1>keren</h1>
            {food.map((pic, index) => (
          <div className="slide" key={index}>
            <img src={pic.largeImageURL} style={{ width: "100%" }} alt="picURL" />
            {/* <img src={pic} alt="picURL" /> */}
            {/* <img src={pic.largeImageURL[currentIndex]} alt="picURL" /> */}
          </div>
        ))}
        
            {/* <img src={food.largeImageURL[currentIndex]} /> */}
        </div>
    )
}


// ----------------------------------

// collections: 1
// comments: 22
// downloads: 6658
// id: 7337735
// imageHeight: 3712
// imageSize: 2950205
// imageWidth: 5568
// largeImageURL: "https://pixabay.com/get/g182a85b433452c137c54d9b3d5389e5a78cc242a4a20cd9b5b58bf75a4e57e72c742e6e41e16c144d3dbd31a89673d4972dbdacc9b80ecc49058823be2b2b38a_1280.jpg"
// likes: 41
// pageURL: "https://pixabay.com/photos/bell-tower-landscape-sunset-cross-7337735/"
// previewHeight: 100
// previewURL: "https://cdn.pixabay.com/photo/2022/07/22/09/30/bell-tower-7337735_150.jpg"
// previewWidth: 150
// tags: "bell tower, landscape, sunset"
// type: "photo"
// user: "ELG21"
// userImageURL: "https://cdn.pixabay.com/user/2022/04/07/18-24-56-559_250x250.jpg"
// user_id: 3764790
// views: 6742
// webformatHeight: 427
// webformatURL: "https://pixabay.com/get/gb6cdacf16ecd23fb06dcc7a5502f997a61d0c187b227cfe0270737443b747166e69345e02c343503a34aa4492e0934a6043fda26edee0e65a7b057fe58f4d74d_640.jpg"
// webformatWidth: 640