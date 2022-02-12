import { search, users } from "../../assets/icons/icons";
import "./Header.css";
import { burger } from "../../assets/icons/icons";
import Logo from "../../components/shared/Logo/Logo";
import { useSelector } from "react-redux";
import { DARK } from "../../actions/constants";

function isThemeDark(theme) {
  return theme === DARK;
}

export default function Header({ opacity }) {
  let theme = useSelector((state) => state.theme);
  let r = isThemeDark(theme) ? 31 : 230;
  let g = isThemeDark(theme) ? 35 : 236;
  let b = isThemeDark(theme) ? 63 : 245;

  return (
    <header
      className="main-header"
      style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})` }}
    >
      <div className="d-none w-52 items-center justify-between box-border">
        {burger()}
        <Logo />
      </div>
      <form className="search " action="#">
        {search()}
        <input
          className="search-input "
          type="text"
          placeholder="Search for a friend, faction event or superstar"
        />
      </form>
      <div className="d-none">{users()}</div>
    </header>
  );
}
