import React, { useEffect, useState } from "react";
import "./RightSideBar.css";
import EventsCard from "../../components/shared/Cards/EventsCard/EventsCard";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { userPoints } from "../../constants/userPoints.constant";
import UserPoint from "../../components/shared/Cards/UserPoint/UserPoint";
import * as icons from "../../assets/icons/icons";
import ProcessingBtn from "../../components/shared/Buttons/ProcessingBtn/ProcessingBtn";
import DropDown from "../../components/shared/DropDown/DropDown";
import Facebook from "../../components/shared/Facebook/Facebook";
import Footer from "./Footer/Footer";
import setLocalStorage from "../../util/helpers/setLocalStorage";
import { pen } from "../../assets/icons/icons";
import { userSettings } from "../../constants/usersettings.constant";
import loginSlice from "../../store/login/loginSlice";

const RightSideBar = React.memo(function RightSideBar({ events }) {
  const [processed, setProcessed] = useState(false);
  const [loginDropDownOpen, setLoginDropDownOpen] = useState(false);
  const [accountSettingsOpen, setaccountSettingsOpen] = useState(false);

  let dispatch = useDispatch();
  let isLogedin = useSelector((state) => state.isLogedin);
  let currentUser = useSelector((state) => state.currentUser);

  console.log("rendered", loginDropDownOpen);

  useEffect(() => {
    if (isLogedin) {
      setProcessed(false);
    }
  }, [isLogedin]);

  const toggleDropDown = () => {
    console.log("handler", loginDropDownOpen);
    setLoginDropDownOpen(!loginDropDownOpen);
  };

  const toggleaccountSettings = () => {
    setaccountSettingsOpen(!accountSettingsOpen);
  };

  const changeBtn = () => {
    setProcessed(true);
  };

  const handleLogout = () => {
    dispatch(loginSlice.actions.logout());
    setLoginDropDownOpen(false);
    setaccountSettingsOpen(false);
    setLocalStorage("currentUser", null);
    setLocalStorage("isLogedin", false);
  };

  return (
    <aside className="right-sidebar">
      {isLogedin ? (
        <>
          <h1 className="right-sidebar__heading p-fixed h-6 background-4 w-17">
            Profile & Events
          </h1>
          <div className="user d-flex flex-column justify-center align-center m-t-5">
            <div className="user__avatar b-radius-full  w-1 h-1 background-1 border-1 d-flex justify-center align-center">
              <img className="b-radius-full w-5 h-5" src={currentUser.img} />
            </div>
            <div className="settings-icon" onClick={toggleaccountSettings}>
              {pen()}
            </div>
            <div className="user-settings-dropdown">
              <DropDown
                open={accountSettingsOpen}
                render={() => {
                  return userSettings.map((item) =>
                    item.description === "Logout" ? (
                      <div
                        onClick={handleLogout}
                        className="user__setting-item"
                      >
                        {item.description}
                      </div>
                    ) : (
                      <div className="user__setting-item">
                        {item.description}
                      </div>
                    )
                  );
                }}
              />
            </div>
            <div className="t-2">{currentUser.name}</div>
            <div className="user__points">
              {userPoints.map((item) => (
                <UserPoint
                  icon={icons[item.icon]()}
                  description={item.description}
                  point={item.point}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {processed ? (
            <ProcessingBtn type="processing-btn-login" />
          ) : (
            <button className="login-btn" onClick={toggleDropDown}>
              Login
            </button>
          )}
          <div className="login-dropdown">
            <DropDown
              open={loginDropDownOpen}
              render={() => {
                return (
                  <>
                    {processed ? (
                      <ProcessingBtn type="processing-btn" />
                    ) : (
                      <button
                        className="login-dropdown__fb"
                        onClick={changeBtn}
                      >
                        <p>Login with Facebook</p>
                        <Facebook isLogedin={isLogedin} />
                      </button>
                    )}
                    <button className="login-dropdown__scopely">
                      Login with ScopelyID
                    </button>
                  </>
                );
              }}
            />
          </div>
        </>
      )}
      <div className="events-container">
        <EventsCard description="Today's" events={events.today} />
        <hr />
        <EventsCard description="Tomorrow's" events={events.tomorrow} />
        <button className="calendar-btn">Go to Calendar</button>
      </div>
      <Subscribe />
      <Footer />
    </aside>
  );
});

export default RightSideBar;
