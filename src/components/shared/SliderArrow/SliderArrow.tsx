import { MouseEventHandler } from "react";
import "./SliderArrow.css";

export default function SliderArrow({
  arrow,
}: {
  arrow: string;
}) {
  return (
    <div>
      {arrow}
    </div>
  );
}
