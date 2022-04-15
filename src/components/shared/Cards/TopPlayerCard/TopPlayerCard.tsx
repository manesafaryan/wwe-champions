import { Link } from "react-router-dom";
import "./TopPlayerCard.css";

export default function TopPlayerCrad({
  name,
  factionName,
}: {
  name: string;
  factionName: string;
}) {
  return (
    <div className="top-player-card">
      <span>{name}</span>

      <span>{factionName}</span>

      <hr />
      <span>Global Rank</span>
    </div>
  );
}
