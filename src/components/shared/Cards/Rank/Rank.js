import "./Rank.css";

export default function Rank({ name, faction, avatar, points, rank }) {
  let background = rank % 2 === 0 ? "var(--bcgColor1)" : "transparent";
  return (
    <div className="rank-row" style={{ background: { background } }}>
      <span className="rank">{rank}</span>
      <img className="rank-avatar" src={`./images/${avatar}`} />
      <div className="name-container">
        <p className="rank-row__faction">{faction}</p>
        <p className="rank-row__name">{name}</p>
      </div>
      <p>{points}</p>
    </div>
  );
}
