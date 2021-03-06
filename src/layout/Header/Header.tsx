import { RootStateOrAny, useSelector } from "react-redux";
import "./Header.css";
import { search, users } from "../../assets/icons/icons";
import { burger } from "../../assets/icons/icons";
import Logo from "../../components/shared/Logo/Logo";
import { DARK, en, fr } from "../../constants/actions.constant";
import Switch from "../../components/shared/Switch/Switch";
import langSlice from "../../store/lang/langSlice";

type Theme = "DARK" | "LIGHT"

function isThemeDark(theme: Theme) {
  return theme === DARK;
}

export default function Header({ opacity }: { opacity: number }) {
  let theme = useSelector((state: RootStateOrAny) => state.theme);
  let lang = useSelector((state: RootStateOrAny) => state.lang);

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
      <div className="languageBtn-container">
        <Switch
          item1={en}
          item2={fr}
          description="lang"
          value={lang}
          switcher={langSlice.actions.change}
        />
      </div>
    </header>
  );
}
