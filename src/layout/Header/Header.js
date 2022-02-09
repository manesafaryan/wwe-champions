import { useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";
import { search } from "../../assets/icons/icons";
import "./Header.css";

export default function Header({opacity}) {
  let r = 31
  let g = 35;
  let b = 63
  return (
    <header className="main-header" style={{backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`}}>
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
