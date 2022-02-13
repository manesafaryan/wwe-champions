import React, { useEffect, useState } from "react";
import "./RightSideBar.css";
import EventsCard from "../../components/shared/Cards/EventsCard/EventsCard";
import Subscribe from "../../components/Subscribe/Subscribe";
import { logout } from "../../actions/loggedin";
import { useDispatch, useSelector } from "react-redux";
import { userPoints } from "../../constants/userPoints.constant";
import UserPoint from "../../components/shared/Cards/UserPoint/UserPoint";
import * as icons from "../../assets/icons/icons";
import ProcessingBtn from "../../components/shared/Buttons/ProcessingBtn/ProcessingBtn";
import DropDown from "../../components/shared/DropDown/DropDown";
import Facebook from "../../components/shared/Facebook/Facebook";
import Footer from "./Footer/Footer";

const RightSideBar = React.memo(function RightSideBar({ events }) {
  const [processed, setProcessed] = useState(false);
  const [loginDropDownOpen, setLoginDropDownOpen] = useState(false);

  let dispatch = useDispatch();
  let isLogedin = useSelector((state) => state.isLogedin);
  let currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (isLogedin) {
      setProcessed(false);
    }
  }, [isLogedin]);

  const toggleDropDown = () => {
    setLoginDropDownOpen(!loginDropDownOpen);
  };

  const changeBtn = () => {
    setProcessed(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setLoginDropDownOpen(false)
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
              <img
                className="b-radius-full w-5 h-5"
                src={currentUser.img}
              ></img>
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
          <button onClick={handleLogout}>logout</button>
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
          <DropDown
            open={loginDropDownOpen}
            render={() => {
              return (
                <>
                  <div className="login-dropdown__triangle"></div>
                  {processed ? (
                    <ProcessingBtn type="processing-btn" />
                  ) : (
                    <button className="login-dropdown__fb" onClick={changeBtn}>
                      <p>Login with Facebook</p>
                      <Facebook />
                    </button>
                  )}
                  <button className="login-dropdown__scopely">
                    Login with ScopelyID
                  </button>
                </>
              );
            }}
          />
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
