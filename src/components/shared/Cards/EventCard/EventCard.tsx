import { FunctionComponent } from "react";
import { event } from "../../../../assets/icons/icons";
import "./EventCard.css";

interface IProps {
  even: boolean, title: string, about: string
}

const EventCard:FunctionComponent<IProps> = ({ even, title, about }) => {
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

export default EventCard