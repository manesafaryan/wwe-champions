import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import useToggle from "../../../hooks/useToggle";
import "./DropDown.css";

interface IProps {
  render: Function;
  open: true | false;
}

const DropDown: FunctionComponent<IProps> = ({ render, open }) => {
  const dropdownRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, dropdownRef);

  useEffect(() => {
    setDropdownOpen(false);
  }, [dropdownOpen]);

  return (
    <>
      <div
        ref={dropdownRef}
        className={`dropdown ` + (open ? "" : "d-none")}
      >
        <div className="dropdown__triangle"></div>
        {render()}
      </div>
    </>
  );
};

export default DropDown;
