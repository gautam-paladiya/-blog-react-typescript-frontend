import * as React from "react";
import { Container } from "./Container";
import ThemeSwitch from "./ThemeSwitch";

export interface IFooterProps {
  copyright?: string;
}

export default function Footer(props: IFooterProps) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All rights
        reserved.
      </div>
      <div className="flex justify-center gap-1 mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
          <a
            href="https://gautam-paladiya.github.io/gautampaladiya/"
            rel="noopener"
            target="_blank"
          >
            Gautam Paladiya
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/gautam-paladiya"
            rel="noopener"
            target="_blank"
          >
            Github
          </a>
        </span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
