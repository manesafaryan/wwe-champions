import * as icons from "../../assets/icons/icons";
import "./SideBarItem.css";
import { FormattedMessage } from "react-intl";
import { FunctionComponent, MouseEventHandler } from "react";

interface IProps {
  description : string,
  icon: "dashboard" | "leaderboard" | "offers" | "dice" | "coin" | "tournament" |"calendar" | "news" | "guide" | "trophy" | "gamepad" | "search" | "apple"
  New: boolean,
  activate: MouseEventHandler<HTMLLIElement>,
  active: boolean,
}

const SideBarItem: FunctionComponent<IProps> = ({
  description,
  icon,
  New,
  activate,
  active,
}) => {
  let classname = active ? "nav-item--active" : "";
  return (
    <li className="nav-item" onClick={activate}>
      <div className={`nav-item_content ${classname}`}>
        <span className="nav-item_icon">{icons[icon]()}</span>
        <span>
          <FormattedMessage id={description} />
        </span>
      </div>
      {New? <span className="nav-item_new"><FormattedMessage id="NEW" /></span> : null}
    </li>
  );
}

export default SideBarItem