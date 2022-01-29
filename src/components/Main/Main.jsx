import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RightSideBar from "../layout/RightSideBar/RightSideBar";
import LeftSideBar from "../layout/LeftSideBar/LeftSideBar";
import Header from "../layout/Header/Header";
import Home from "../../pages/Home/Home";
import "./Main.css";

export default function Main() {
  const [theme, setTheme] = useState("Dark");

  const switchToLight = () => {
    setTheme("Light");
  };

  const switchToDark = () => {
    setTheme("Dark");
  };

  return (
    <Router>
      <div className="container">
        <LeftSideBar
          toLight={switchToLight}
          toDark={switchToDark}
          theme={theme}
        />
        <Header />
        <main className="main">
          {/*<Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>*/}
          <Home />
        </main>
        <RightSideBar />
      </div>
    </Router>
  );
}
