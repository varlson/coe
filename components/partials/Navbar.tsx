import React from "react";
import { Logo, Search } from "../ui/Ui";
import SubNavBar from "./SubNavBar";

export default function Navbar() {
  return (
    <div className="bg-basicBlack p-2">
      <div className="w-9/12 m-auto grid grid-cols-12">
        <div className="col-span-5 text-white">
          <Logo />
        </div>

        <div className="self-center col-start-8 col-span-5">
          <Search />
        </div>

        <div className="col-span-12 my-2">
          <SubNavBar />
        </div>
      </div>
    </div>
  );
}
