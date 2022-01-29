import { search } from "../../../assets/icons/icons";
import "./Header.css";

export default function Header() {
  
  return (
    <header className="main-header">
      <form className="search" action="#">
        {search()}
        <input
          className="search-input"
          type="text"
          placeholder="Search for a friend, faction event or superstar"
        />
      </form>
    </header>
  );
}
