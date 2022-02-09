import { Link } from "react-router-dom";
import "./TopPlayerCard.css";

export default function TopPlayerCrad({ name, factionName, avatar, rank }) {
  return (
    <div className="top-player-card">
      <Link>
        <span>{name}</span>
      </Link>
      <Link>
        <span>{factionName}</span>
      </Link>
      <hr />
      <span>Global Rank</span>
    </div>
  );
}
