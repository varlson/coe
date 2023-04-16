import React from "react";
import { ComercialTime, Location, MediaSocial } from "../ui/Ui";

export default function Footer() {
  return (
    <div className="font-Jura text-white py-10 bg-dark800">
      <div className="text-sm justify-between w-9/12 m-auto flex">
        <Location />
        <MediaSocial />
        <ComercialTime />
      </div>
    </div>
  );
}
