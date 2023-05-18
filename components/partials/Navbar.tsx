import React from "react";
import { Logo, Search } from "../ui/Ui";
import SubNavBar from "./SubNavBar";
import ClickableIcons from "../ui/ClickableIcons";

export default function Navbar() {
  return (
    <div className="bg-basicBlack p-2">
      <div className="md:w-9/12 m-auto grid grid-cols-12 ">
        <div className=" col-span-8 md:col-span-5 text-white">
          <Logo />
        </div>

        <div className="hidden md:block self-center col-start-8 col-span-5">
          <Search />
        </div>

        <div className=" md:hidden self-center justify-self-end col-span-4 ">
          <ClickableIcons />
        </div>

        <div className="hidden md:block col-span-12 my-2">
          <SubNavBar />
        </div>
      </div>
    </div>
  );
}
