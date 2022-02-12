import "./Rank.css";

export default function Rank({ name, faction, avatar, points, rank }) {
  let background = rank % 2 === 0 ? "--bcgColor1" : "--bcgColor5";
  return (
    <div
      className="rank-row d-flex justify-between p-l-r-1"
      style={{ backgroundColor: `var(${background})` }}
    >
      <span className="rank t-1">{rank}</span>
      <div className="name-container d-flex w-5">
        <img className="rank-avatar" src={`./images/${avatar}`} />
        <div className="name">
        <p className="rank-row__faction t-2 f-2">{name}</p>
        <p className="rank-row__name t-1 f-1">{faction}</p>
        </div>
      </div>
      <p className="t-2">{points}</p>
    </div>
  );
}
