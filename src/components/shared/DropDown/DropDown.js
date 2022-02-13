import { useEffect, useRef } from "react";
import useToggle from "../../../hooks/useToggle";

export default function DropDown({ render, open }) {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, dropdownRef);

  useEffect(() => {
    setDropdownOpen(open);
  }, [open]);

  return (
    <>
      <div
        ref={dropdownRef}
        className={`login-dropdown ` + (dropdownOpen ? "" : "d-none")}
      >
        <div className="login-dropdown__triangle"></div>
        {render()}
      </div>
    </>
  );
}
