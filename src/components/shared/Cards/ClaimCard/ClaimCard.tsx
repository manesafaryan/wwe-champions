import "./ClaimCard.css";
import Ordinary from "../../Buttons/OrdinaryBtn/OrdinaryBtn";
import { FunctionComponent } from "react";

interface IProps {
  title: string;
  description: string;
  img: string;
  background: string;
}

const ClaimCard: FunctionComponent<IProps> = ({
  title,
  description,
  img,
  background,
}) => {
  return (
    <div
      className="claim-card"
      style={{
        backgroundImage: "url(" + `/images/${background}` + ")", 
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
};

export default ClaimCard