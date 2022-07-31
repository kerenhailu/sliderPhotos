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
        <button onClick={CheckUser} className="buttonInputSearch" >
        Search
        </button>
        <input type="text" onChange={InputUser} placeholder="User Name .." />
        
      </div>
      {showUser.largeImageURL === undefined ? (
        <section className="message">{message}</section>
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

