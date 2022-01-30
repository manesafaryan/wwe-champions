import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RightSideBar from "../layout/RightSideBar/RightSideBar";
import LeftSideBar from "../layout/LeftSideBar/LeftSideBar";
import Header from "../layout/Header/Header";
import Home from "../../pages/Home/Home";
import "./Main.css";

const events = {
  today: [
    { title: "Color Clash-Red", about: "Ends on January-31 at 03:00 AM" },
    {
      title: `Bret Hart's "I am" Tour`,
      about: "Ends on January-31 at 10:00 AM",
    },
  ],

  tomorrow: [
    {
      title: "King's Weekly - VICTORY TO",
      about: "Ends on February-07 at 12:00 PM",
    },
  ],
};

export default function Main() {
  return (
    <Router>
      <div className="container">
        <LeftSideBar />
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </main>
        <RightSideBar events={events}/>
      </div>
    </Router>
  );
}
