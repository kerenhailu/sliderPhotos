import { useEffect, useState } from "react";
import { GetAllPhotos } from "../../Services/Photos/photos-service";

//   export default function Home() {
//     // let [category, setCategory] = useState(["sport","music","food"]);
//     let [image, setImage] = useState("");
//     let [allImg, setAllImg] = useState([]);
//     let [indexImg, setIndexImg] = useState(0);
//   let [ loading, setLoading ] =useState(false);

// console.log(allImg);
//     useEffect(() => {
  //       const interval = setInterval(() => {
    //         if (indexImg === allImg.length - 1 ) {
      //             indexImg=0;
//           console.log("image :" ,image);
//         } else {
  //           setImage(allImg[indexImg].largeImageURL);
  //           indexImg++
  //           console.log(indexImg);
  //           console.log("image :" ,image);
  //         }
  //       }, 3000);
  
  //       return () => {
    //               clearInterval(interval);
    //       };

//     }, [allImg]);

//     return (
  //       <>
  //       {loading ? (
    //         <h1>keren</h1>
    //       ) : (
      //       <div>
      //       <h1>showing All collection</h1>
      //         <img className="centerImg" src={image} style={{ width: "100%" }} alt="img" />
      //       </div>
      //        )} </>
      
      //     );
      //   }
      
      import React from "react";
      import { Link } from "react-router-dom";
      
      export default function Home() {
    let [allImg, setAllImg] = useState([]);
    let [user, setUser] = useState("");
  let [baseData , setBaseData] = useState([]) ;

    let message = "not found" ;

    let [visibleMessage , setVisibleMessage] = useState(false) ;

        // useEffect(() => {
        //   GetAllPhotos().then((res) => {
        //     setAllImg(res.hits)
        // });
        // }, []);

        const fetchData = () => {
          GetAllPhotos()
          .then((data) => {
            setBaseData(data.hits);
            setAllImg(data.hits) ;
          })
          .catch(err => console.log(err))
        };
      
        useEffect(() => {
          fetchData();
        }, []);
      //   function InputUser(event){
      //     // setUser(event.target.value) 
      //     console.log(event.target.value);
      //  }
      //  function sameUser(e){
      //      allImg.filter (
      //          (user) => user.user.toLowerCase().indexOf(e.target.value) > -1
      //         );
      //         if(user==allImg.user){
      //           console.log("yes");
      //         }
      //         else{
      //           console.log("no");
      //           console.log(allImg.user);
      //           console.log(user);
      //         }
              
      const findByName = (e) => {

        setVisibleMessage(false);
    
          let filteredData = allImg.filter (
          (user) => user.user.toLowerCase().indexOf(e.target.value) > -1
         );
    
        if(filteredData.length) {
          setAllImg(filteredData) 
        }
        else {
          setVisibleMessage(true)
          let filteredBase = baseData.filter(user => user.user.toLowerCase().indexOf(e.target.value) > -1)
          if(filteredBase.length){ 
            setAllImg (filteredBase) ; 
            setVisibleMessage(false)
          }
        }
    
        e.target.value === "" && fetchData();
      };
      
  return (
    <div className="Home">
      {/* <input type="text" onChange={InputUser}/>
          <button onClick={sameUser}>click</button> */}
         <input className="sortNameInput" onChange={findByName} placeholder="Search By Name"/>
         {visibleMessage ? <p className="errorName">{message}</p> : ""} 
      <h1>Choose a Category</h1>
      <div className="Buttons">
        <button>
          <Link to="/food">Food</Link>
        </button>
        <button>
          <Link to="/sport">Sport</Link>
        </button>
        <button>
          <Link to="/music">Music</Link>
        </button>
      </div>
    </div>
  );
}
