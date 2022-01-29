import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./LeftSideBar.css";
import SideBarItem from "../../SideBarItem/SideBarItem";
import { apple, googlePlay, moon, sun } from "../../../assets/icons/icons";
import { sideBarItems } from "../../constants/sidebar.constant";
import Logo from "../../shared/Logo/Logo";
import Store from "../../shared/Buttons/Store/Store";

export default function RightSideBar({ theme, toLight, toDark }) {
  const [actives, setActives] = useState([false, false, false, false, false, false, false, false, false, false, false,]);

  const [buttonClass, setButtonClass] = useState("");
  const sideBarRef = useRef();
  const buttonRef = useRef(null);

  const handleScroll = ({ target }) => {
    const position = target.scrollTop;
    if (position < 90 && buttonRef.current !== "") {
      buttonRef.current = "";
      setButtonClass("");
    } else if (position > 91 && buttonRef.current !== "btn-primary") {
      buttonRef.current = "btn-primary";
      setButtonClass("btn-primary");
    }
  };

  const switchToDark = () => {
    toDark();
  };

  const switchToLight = () => {
    toLight();
  };

  useEffect(() => {
    sideBarRef.current.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activateItem = (index) => () => {
    setActives(actives.map((item, i) => i === index));
  };

  console.log("rendered");
  const switchClass = theme === "Dark" ? "goToLeft" : "goToRight";

  return (
    <aside ref={sideBarRef} className="left-sidebar">
      <Logo />
      <div className="button-container">
        <Link to="/home">
          <button className={"play-button" + ` ${buttonClass}`}>
            <p className="play-button_icon">PLAY THE GAME</p>
          </button>
        </Link>
      </div>

      <nav className="main-nav">
        <ul className="nav-items">
          {sideBarItems.map((item, index) => (
            <SideBarItem
              key={item.description}
              icon={item.icon}
              description={item.description}
              New={item.New}
              activate={activateItem(index)}
              active={actives[index]}
            />
          ))}
        </ul>
      </nav>
      <div className="forum-logo-container">
        <a
          className="forum-link"
          href="https://community.wwechampions.com/entry/signin?Target=categories"
          target="_blank"
        >
          <p className="forum-logo">WWE Chanpions Forum</p>
        </a>
      </div>
      <div className="stores-container">
         <Store title="Download on the" store="App Store" icon={apple()} link="https://apps.apple.com/app/id1017432937?mt=8"/>
         <Store title="Get it on" store="Google Play" icon={googlePlay()} link="https://play.google.com/store/apps/details?id=com.scopely.whiplash&referrer=adjust_reftag%3DcNQB4dJZR8V9a%26utm_source%3Dweb_acquisition_button_android"/>
      </div> 
      <div className="themeBtn-container">
        <div className={"switch-btn " + switchClass}></div>
        <div className="dark" onClick={switchToDark}>
          {moon()}
          <span>Dark</span>
        </div>

        <div className="light" onClick={switchToLight}>
          {sun()}
          <span>Light</span>
        </div>
      </div>
    </aside>
  );
}
