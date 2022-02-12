import "./UserPoint.css";

export default function UserPoint({ icon, point, description }) {
  return (
    <div className="user-point">
      <div className="user-point__data">
        <div className="user-point__icon">{icon}</div>
        <div className="user-point__content">
          <p className="t-2 font-semibold">{point}</p>
          <p className="t-1 f-1">{description}</p>
        </div>
      </div>
      <div className="user-point__add"> +</div>
    </div>
  );
}
