import { useEffect, useState } from "react";
import { GetAllPhotos } from "../../Services/Photos/photos-service";
import { Link } from "react-router-dom";

export default function Home() {
  let [allImg, setAllImg] = useState([]);
  let [userNameReceived, setUserNameReceived] = useState("");
  let [showUser, setShowUser] = useState({});
  let [message, setMessage] = useState("");

  useEffect(() => {
    GetAllPhotos().then((res) => {
      setAllImg(res.hits);
    });
  }, []);

  function InputUser(event) {
    setUserNameReceived(event.target.value);
  }

  function CheckUser() {
    allImg.filter((user) => {
      if (userNameReceived == user.user) {
        setShowUser(user);
        setMessage("");
      } else {
        setMessage("not found");
      }
    });
  }

  return (
    <div className="Home">
      <div className="Categorys">
        <h1>Choose a Category</h1>
        <Link to="/food">
          <button>Food</button>
        </Link>
        <br />
        <Link to="/sport">
          <button>Sport</button>
        </Link>
        <br />
        <Link to="/music">
          <button>Music</button>
        </Link>
        <br />
      </div>
      <div className="divSearch">
        <h1>Enter a User Name</h1>
        <input
          type="text"
          onChange={InputUser}
          placeholder="Full User Name .."
        />
        <button onClick={CheckUser} className="buttonInputSearch">
          Search
        </button>
        {showUser.largeImageURL === undefined ? (
          <section className="message">{message}</section>
        ) : (
          <section className="cardUser">
            <h2>{showUser.user}</h2>
            <img src={showUser.largeImageURL} alt="userImg" />
            <br />
          </section>
        )}
      </div>
    </div>
  );
}
