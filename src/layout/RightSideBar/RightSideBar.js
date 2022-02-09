import React from "react";
import "./RightSideBar.css";
import { useRef } from "react";
import EventsCard from "../../components/shared/Cards/EventsCard/EventsCard";
import Subscribe from "../../components/Subscribe/Subscribe";
import useToggle from "../../hooks/useToggle";

const RightSideBar = React.memo(function RightSideBar({ events }) {
  const loginRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, loginRef);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <aside className="right-sidebar">
      <button className="login-btn" onClick={toggleDropDown}>
        Login
      </button>
      <div
        ref={loginRef}
        className={`login-dropdown ` + (dropdownOpen ? "" : "d-none")}
      >
        <div className="login-dropdown__triangle"></div>

        <button className="login-dropdown__fb">Login with Facebook</button>
        <button className="login-dropdown__scopely">
          Login with ScopelyID
        </button>
      </div>
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
