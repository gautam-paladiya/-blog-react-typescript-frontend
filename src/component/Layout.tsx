import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProgressBar from "./ProgressBar";

export interface ILayoutProps {
  children: React.ReactNode;
  loading?: boolean;
  isNavbar?: boolean;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400 flex flex-col min-h-screen">
      <div className="grow dark:bg-black ">
        {props.isNavbar && <Navbar {...props} />}
        {props.loading ? <ProgressBar /> : props.children}
      </div>
      <Footer />
    </div>
  );
}
