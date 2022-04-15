import { Link } from "react-router-dom";
import "./PlayButton.css";

export default function PlayButton({ buttonClass }: {buttonClass: string}) {
  return (
    <Link to="/">
      <button className={"play-button" + ` ${buttonClass}`}>
        <p className="play-button_icon">PLAY THE GAME</p>
      </button>
    </Link>
  );
}
