import { useEffect, useRef } from "react";
import useToggle from "../../../hooks/useToggle";
import "./DropDown.css"

export default function DropDown({ render, open }) {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, dropdownRef);

  console.log(open, "aaaa")

  useEffect(() => {
    setDropdownOpen(open);
  }, [open]);

  return (
    <>
      <div
        ref={dropdownRef}
        className={`dropdown ` + (dropdownOpen ? "" : "d-none")}
      >
        <div className="dropdown__triangle"></div>
        {render()}
      </div>
    </>
  );
}
