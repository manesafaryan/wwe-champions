import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import RightSideBar from "./layout/RightSideBar/RightSideBar";
import LeftSideBar from "./layout/LeftSideBar/LeftSideBar";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import "./App.css";
import Dashboard from "./pages/DashBoard/DashBoard";
import { useRef } from "react/cjs/react.development";

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
  const mainRef = useRef();
  const [opacity, setOpacity] = useState(0);

  const handleScroll = ({ target }) => {
    const position = target.scrollTop;
    if (position < 100) {
      setOpacity(position / 100);
    }
    else setOpacity(1)
  };

  useEffect(() => {
    mainRef.current.addEventListener("scroll", handleScroll);
    return () => {
      mainRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="container">
        <LeftSideBar />
        <Header opacity={opacity}/>
        <main className="main" ref={mainRef}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <RightSideBar events={events} />
      </div>
    </Router>
  );
}