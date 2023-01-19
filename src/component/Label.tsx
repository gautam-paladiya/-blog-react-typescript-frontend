import * as React from "react";
import { cx } from "../util/all";

export interface ILabelProps {
  children: React.ReactNode;
  color: number;
}

export default function Label(props: ILabelProps) {
  const colors = [
    "text-emerald-700",
    "text-blue-600",
    "text-orange-700",
    "text-purple-600",
    "text-pink-600",
  ];

  const selectedColor = colors[props.color];
  return (
    <span
      className={cx(
        "inline-block mt-5 text-xs font-medium tracking-wider uppercase",
        selectedColor
      )}
    >
      {props.children}
    </span>
  );
}
