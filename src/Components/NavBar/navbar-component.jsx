import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/food">Food</Link>
      <Link to="/music">Music</Link>
      <Link to="/sport">Sport</Link>
    </div>
  );
}
