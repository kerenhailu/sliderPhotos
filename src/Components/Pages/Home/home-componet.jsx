import { useEffect, useState } from "react";
import { GetAllPhotos } from "../../Services/Photos/photos-service";
import { Link } from "react-router-dom";

export default function Home() {
  let [allImg, setAllImg] = useState([]);
  let [userNameReceived, setUserNameReceived] = useState("");
  let [showUser, setShowUser] = useState({});
  let [message, setMessage] = useState("");
  // let message = "not found";

  useEffect(() => {
    GetAllPhotos().then((res) => {
      setAllImg(res.hits);
    });
  }, []);

  function InputUser(event) {
    setUserNameReceived(event.target.value);
    console.log(event.target.value);
  }

  function CheckUser() {
    allImg.filter((user) => {
      if (userNameReceived == user.user) {
        setShowUser(user);
        console.log(showUser);
        console.log(userNameReceived, ":", user.user);
        setMessage("")
      } else {
        setMessage("not found")
        console.log(userNameReceived, ":", user.user);
      }
    });
  }

  return (
    <div className="Home">
      <h1>Choose a Category</h1>
      <div className="Categorys">
        <button>
          <Link to="/food">Food</Link>
        </button>
        <br />
        <button>
          <Link to="/sport">Sport</Link>
        </button>
        <br />
        <button>
          <Link to="/music">Music</Link>
        </button>
        <br />
      </div>
      <div>
        <h1>Enter a User Name</h1>
        <button onClick={CheckUser} className="buttonInput">
        Search
        </button>
        <input type="text" onChange={InputUser} placeholder="User Name .." />
        
      </div>
      {showUser.largeImageURL === undefined ? (
        <section className="cardUser">{message}</section>
      ) : (
        <section className="cardUser">
          <h2>{showUser.user}</h2>
          <img src={showUser.largeImageURL} alt="userImg" />
          <br/>
        </section>
      )}
    </div>
  );
}

// <section className="cardUser">
//  <h3>user:{showUser.user}</h3>
{
  /* collections:{showUser.collections}<br/>
comments:{showUser.comments}<br/>
downloads:{showUser.downloads}<br/>
id:{showUser.id}<br/>
imageHeight:{showUser.imageHeight}<br/>
imageSize:{showUser.imageSize}<br/>
imageWidth:{showUser.imageWidth}<br/> */
}
{
  /* largeImageURL:<br/> */
}
{
  /* <img src={showUser.largeImageURL} alt="userImg"/> */
}
{
  /* <br/>
likes:{showUser.likes}<br/>
pageURL:{showUser.pageURL} */
}
{
  /* <img src= alt="userImg"/> */
}
{
  /* previewHeight:{showUser.previewHeight}<br/>
previewURL */
}
{
  /* <img src={showUser.previewURL} alt="userImg"/> */
}
{
  /* previewWidth:{showUser.previewWidth}<br/> */
}
{
  /* tags:{showUser.tags}<br/>
type:{showUser.type}<br/> */
}
{
  /* <img src={showUser.userImageURL} alt="userImg"/> */
}
{
  /* user_id:{showUser.user_id}<br/>
views:{showUser.views}<br/>
webformatHeight:{showUser.webformatHeight}<br/> */
}
{
  /* <img src={showUser.webformatURL} alt="userImg"/> */
}
{
  /* <br/> */
}
{
  /* webformatWidth:{showUser.webformatWidth}<br/> */
}
