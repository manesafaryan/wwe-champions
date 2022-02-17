import "./Rank.css";

export default function Rank({ name, faction, avatar, points, rank }) {
  let background = rank % 2 === 0 ? "--bcgColor10" : "--bcgColor5";
  let borderColor = rank % 2 === 0 ? "--rhino" : "--bcgColor5";
  let diamondColor =
    rank === 1
      ? "#ffde00"
      : rank === 2
      ? "#00baff"
      : rank === 3
      ? "#12EEB1"
      : "#343961";

  return (
    <div
      className="rank-row d-flex justify-between p-l-r-1"
      style={{
        backgroundColor: `var(${background})`,
        border: `1px solid var(${borderColor})`,
      }}
    >
      <div className="d-flex justify-between align-center">
        <div
          className="diamond"
          style={{
            backgroundColor: `${diamondColor}`,
          }}
        >
          <div className="diamond-top-left"></div>
          <div className="diamond-bottom-left"></div>
          <div className="diamond-horizon"></div>
          <div className="diamond-top-right"></div>
          <div className="diamond-bottom-right"></div>
          <div className=""></div>
        </div>
        <span className="rank t-1 f-2 w-5 " style={{
            color: `${diamondColor}`,
          }}>{rank}</span>
        <div className="name-container d-flex w-5">
          <img className="rank-avatar m-r-1" src={`./images/${avatar}`} />
          <div className="name">
            <p className="rank-row__faction t-2 f-2">{name}</p>
            <p className="rank-row__name t-1 f-1">{faction}</p>
          </div>
        </div>
      </div>
      <p className="f-2 t-1">{points}</p>
    </div>
  );
}
