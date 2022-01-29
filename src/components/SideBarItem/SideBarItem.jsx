import { Link } from "react-router-dom";
import * as icons from "../../assets/icons/icons";
import "./SideBarItem.css";

export default function SideBarItem({
  description,
  icon,
  New,
  activate,
  active,
}) {
  let classname = active ? "nav-item--active" : "";
  return (
    <li className="nav-item" onClick={activate}>
      <div className={`nav-item_content ${classname}`}>
        <span className="nav-item_icon">{icons[icon]()}</span>
        <span>{description}</span>
      </div>
      {New ? <span className="nav-item_new">NEW</span> : null}
    </li>
  );
}
