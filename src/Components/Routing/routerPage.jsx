import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "../Pages/Food/food-component";
import Music from "../Pages/Music/music-component";
import Navbar from "../NavBar/navbar-component";
import Sport from "../Pages/Sport/sport-component";
import Home from "../Pages/Home/home-componet";

const PageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/sport" element={<Sport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default PageRouting;
