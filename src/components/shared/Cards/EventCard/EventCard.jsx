import { event } from "../../../../assets/icons/icons";
import "./EventCard.css";

export default function EventCard({ even, title, about }) {
  const background = even ? "--bcgColor3" : "--bcgColor5";
  return (
    <div
      className="event-card"
      style={{ backgroundColor: `var(${background})` }}
    >
      <div className="round-icon">{event()}</div>
      <div className="event-card__description">
        <p className="event-card__title">{title}</p>
        <p className="event-card__about">{about}</p>
      </div>
    </div>
  );
}
