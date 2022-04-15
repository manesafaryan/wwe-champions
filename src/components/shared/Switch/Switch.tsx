import "./Switch.css";
import useSwitch from "../../../hooks/useSwitch";
import { FunctionComponent, ReactElement } from "react";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface IProps {
  description: string;
  value: string;
  icon1?: ReactElement;
  icon2?: ReactElement;
  item1: string;
  item2: string;
  switcher: ActionCreatorWithPayload<any, string>;
  handler?: Function;
}

const Switch: FunctionComponent<IProps> = ({
  description,
  value,
  icon1,
  icon2,
  item1,
  item2,
  switcher,
  handler,
}) => {
  return (
    <>
      <div
        className={
          `switch-btn ` + `${value === item1 ? "goToLeft" : "goToRight"}`
        }
      ></div>
      <div
        className="item1"
        onClick={useSwitch(description, item1, switcher, handler? handler: null)}
      >
        {icon1 && icon1}
        <span>{item1}</span>
      </div>

      <div
        className="item2"
        onClick={useSwitch(description, item2, switcher, handler? handler: null)}
      >
        {icon2 && icon2}
        <span>{item2}</span>
      </div>
    </>
  );
};

export default Switch