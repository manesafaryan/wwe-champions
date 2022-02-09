import "./ClaimCard.css";
import Ordinary from "../../Buttons/OrdinaryBtn/OrdinaryBtn";

export default function ClaimCard({ title, description, img, background }) {
  return (
    <div
      className="claim-card"
      style={{
        background: "url(" + `/images/${background}` + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="claim-card__content">
        <p className="claim-card__title">{title}</p>
        <p className="claim-card__description">{description}</p>
        <img
          className="claim-card__img"
          src={require(`../../../../assets/${img}`)}
          alt=""
        />
      </div>
      <Ordinary description="GO TO SHOP" />
    </div>
  );
}
