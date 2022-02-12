export default function DropDown({render}) {
  const loginRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useToggle(false, loginRef);
    

    return (
        <>
        <div
            ref={loginRef}
            className={`login-dropdown ` + (dropdownOpen ? "" : "d-none")}
          >
            <div className="login-dropdown__triangle"></div>
            {render()}
            </div>
            </>

    )
}