import EventCard from "../EventCard/EventCard";
import "./EventsCard.css";

interface Event {
  title: string;
  about: string;
}

export default function EventsCard({
  description,
  events,
}: {
  description: string;
  events: Event[];
}) {
  return (
    <div className="event-container">
      <div className="event-heading">
        <p className="heading">{description} Events</p>
        <p className="events-quantity">{events.length}</p>
      </div>
      <div className="events">
        {events.map((event, index) => (
          <EventCard
            title={event.title}
            about={event.about}
            even={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
