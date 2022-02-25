import "./Switch.css";
import useSwitch from "../../../hooks/useSwitch";

export default function Switch({
  description,
  value,
  icon1,
  icon2,
  item1,
  item2,
  slice,
  handler,
}) {
  return (
    <>
      <div
        className={
          `switch-btn ` + `${value === item1 ? "goToLeft" : "goToRight"}`
        }
      ></div>
      <div
        className="item1"
        onClick={useSwitch(description, item1, slice, handler)}
      >
        {icon1 && icon1}
        <span>{item1}</span>
      </div>

      <div
        className="item2"
        onClick={useSwitch(description, item2, slice, handler)}
      >
        {icon2 && icon2}
        <span>{item2}</span>
      </div>
    </>
  );
}
