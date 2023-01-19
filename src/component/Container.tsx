import React from "react";
import { cx } from "../util/all";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className = "", children }: Props) => {
  return (
    <div
      className={cx(
        "container px-4 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
