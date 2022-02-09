import Rank from "../Rank/Rank";
import "./RankCard.css";
export default function RankCard({ description, players }) {
  return (
    <div className="rankcard-container">
      <div className="rankcard__classification">
        <span>RANK</span>
        <span>{description}</span>
        <span>POINTS</span>
      </div>

      {players.map((player, index) => (
        <Rank
          name={player.name}
          faction={player.faction}
          points={player.points}
          avatar={player.avatar}
          rank={index + 1}
        />
      ))}
    </div>
  );
}
