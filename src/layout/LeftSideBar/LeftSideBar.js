import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./LeftSideBar.css";
import SideBarItem from "../../components/SideBarItem/SideBarItem";
import { apple, googlePlay, moon, sun } from "../../assets/icons/icons";
import { sideBarItems } from "../../constants/sidebar.constant";
import Logo from "../../components/shared/Logo/Logo";
import Store from "../../components/shared/Buttons/Store/Store";
import PlayButton from "../../components/shared/Buttons/PlayButton/PlayButton";
import { LIGHT, DARK } from "../../actions/constants";
import Switch from "../../components/shared/Switch/Switch";
import themeSlice from "../../store/themeSlice";
import setColorsValues from "../../util/helpers/colorValuesSetter";

const LeftSideBar = React.memo(function LefttSideBar() {
  const [actives, setActives] = useState(Array(10).fill(false));
  const [buttonClass, setButtonClass] = useState("");
  const sideBarRef = useRef();
  const buttonRef = useRef(null);

  let theme = useSelector((state) => state.theme);

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

  useEffect(() => {
    sideBarRef.current.addEventListener("scroll", handleScroll);
    return () => {
      sideBarRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activateItem = (index) => () => {
    setActives(actives.map((item, i) => i === index));
  };

  return (
    <aside ref={sideBarRef} className="left-sidebar">
      <div className="left-sidebar__logo">
        <Logo />
      </div>
      <div className="button-container">
        <PlayButton buttonClass={buttonClass} />
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
        <Store
          title="Download on the"
          store="App Store"
          icon={apple()}
          link="https://apps.apple.com/app/id1017432937?mt=8"
        />
        <Store
          title="Get it on"
          store="Google Play"
          icon={googlePlay()}
          link="https://play.google.com/store/apps/details?id=com.scopely.whiplash&referrer=adjust_reftag%3DcNQB4dJZR8V9a%26utm_source%3Dweb_acquisition_button_android"
        />
      </div>
      <div className="themeBtn-container">
        <Switch
          item1={DARK}
          item2={LIGHT}
          icon1={moon()}
          icon2={sun()}
          description="theme"
          value={theme}
          slice={themeSlice}
          handler={setColorsValues}
        />
      </div>
    </aside>
  );
});

export default LeftSideBar;
