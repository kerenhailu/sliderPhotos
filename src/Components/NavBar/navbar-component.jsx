import { Link } from "react-router-dom";
import Home from "../Pages/Home/home-componet";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/45/45180.png"
          width="30px"
          height="20px"
          alt="iconImg"
        />
        <br />
        Home
      </Link>
      <Link to="/food">
        <img
          src="https://mpng.subpng.com/20190211/xqp/kisspng-computer-icons-scalable-vector-graphics-clip-art-p-delicious-food-svg-png-icon-free-download-35-759-5c619bccc2cd85.9092356015499007487979.jpg"
          width="30px"
          height="20px"
          alt="iconImg"
        />
        <br />
        Food
      </Link>

      <Link to="/music">
        <img
          src="https://pic.onlinewebfonts.com/svg/img_33134.png"
          width="30px"
          height="20px"
          alt="iconImg"
        />
        <br />
        Music
      </Link>
      <Link to="/sport">
        <img
          src="https://static.thenounproject.com/png/256946-200.png"
          width="36px"
          height="20px"
          alt="iconImg"
        />
        <br />
        Sport
      </Link>
    </div>
  );
}
