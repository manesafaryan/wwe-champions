import React, { useState } from "react";
import "./RightSideBar.css";
import { useRef } from "react";
import EventsCard from "../../components/shared/Cards/EventsCard/EventsCard";
import Subscribe from "../../components/Subscribe/Subscribe";
import useToggle from "../../hooks/useToggle";
import { login, logout } from "../../actions/loggedin";
import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { userPoints } from "../../constants/userPoints.constant";
import UserPoint from "../../components/shared/Cards/UserPoint/UserPoint";
import { successLogin, failedLogin } from "../../actions/userLogn";
import * as icons from "../../assets/icons/icons";

const RightSideBar = React.memo(function RightSideBar({ events }) {
  const loginRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, loginRef);
  const [processed, setProcessed] = useState(false);

  let dispatch = useDispatch();
  let isLogedin = useSelector((state) => state.isLogedin);
  let currentUser = useSelector((state) => state.currentUser);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeBtn = () => {
    setProcessed(true);
  };

  const responseFacebook = (response) => {
    console.log(response);
    setProcessed(false);
    setDropdownOpen(false);
    if (response.status !== "unknown") {
      dispatch(
        successLogin({
          name: response.name,
          id: response.id,
          img: response.picture.data.url,
        })
      );
      dispatch(login());
    } else dispatch(failedLogin());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(currentUser);

  return (
    <aside className="right-sidebar">
      {isLogedin ? (
        <>
          <h1 className="right-sidebar__heading p-fixed h-6 background-4 w-17">Profile & Events</h1>
          <div className="user d-flex flex-column justify-center align-center m-t-5">
            <div className="user__avatar b-radius-full  w-1 h-1 background-1 border-1 d-flex justify-center align-center">
              <img className="b-radius-full w-5 h-5" src={currentUser.img}></img>
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
            <button className="processing-btn-login">
              <div className="processing-btn__balls">
                <div className="odd"></div>
                <div className="even"></div>
                <div className="odd"></div>
                <div className="even"></div>
              </div>
              <p>Processing</p>
            </button>
          ) : (
            <button className="login-btn" onClick={toggleDropDown}>
              Login
            </button>
          )}
          <div
            ref={loginRef}
            className={`login-dropdown ` + (dropdownOpen ? "" : "d-none")}
          >
            <div className="login-dropdown__triangle"></div>
            {processed ? (
              <button className="processing-btn">
                <div className="processing-btn__balls">
                  <div className="odd"></div>
                  <div className="even"></div>
                  <div className="odd"></div>
                  <div className="even"></div>
                </div>
                <p>Processing</p>
              </button>
            ) : (
              <button className="login-dropdown__fb" onClick={changeBtn}>
                <p>Login with Facebook</p>
                <FacebookLogin
                  appId="664630021398305"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                />
              </button>
            )}

            <button className="login-dropdown__scopely">
              Login with ScopelyID
            </button>
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
      <footer>
        <p>
          For information about our privacy practices, please see our{" "}
          <a href="">Privacy Policy</a>
          and our terms of service. We use Mailchimp as our marketing platform.
          By clicking below to subscribe, you acknowledge that your information
          will be transferred to Mailchimp for processing.{" "}
          <a href="">Terms of Service</a>
        </p>
      </footer>
    </aside>
  );
});

export default RightSideBar;
