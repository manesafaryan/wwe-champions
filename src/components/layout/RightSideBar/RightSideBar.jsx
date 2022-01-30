import "./RightSideBar.css";
import EventsCard from "../../shared/Cards/EventsCard/EventsCard";

export default function LeftSideBar({events}) {
  return (
    <aside className="right-sidebar">
      <button className="login-btn">Login</button>
      <EventsCard description="Today's" events={events.today}/>
      <EventsCard description="Tomorrow's" events={events.tomorrow}/>
      </aside>
  )

}
