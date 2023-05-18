import React from "react";
import { ComercialTime, Location, MediaSocial } from "../ui/Ui";

export default function Footer() {
  return (
    <div className="font-Jura text-white py-10 bg-dark800">
      <div className="px-3 text-sm justify-between md:w-9/12 m-auto md:flex">
        <Location />
        <MediaSocial />
        <ComercialTime />
      </div>
    </div>
  );
}
