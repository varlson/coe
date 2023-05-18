import React from "react";
import { sidesProps } from "../../types/types";
import Link from "next/link";

function RightSideItem({
  clickHandle,
  label,
  subMenus,
  icon,
  contentName,
}: sidesProps) {
  return (
    <div className="font-Jura text-sm">
      <div
        onClick={(e) => {
          clickHandle(contentName);
        }}
        className="cursor-pointer bg-basicBlack rounded  text-white p-2 mb-2"
      >
        <div className="flex items-center gap-2">
          <span>{label}</span>
          <img className="h-5" src={icon} alt="" />
        </div>
        <div>
          <ul id={contentName} className="hide ml-2">
            {subMenus?.map((item, index) => (
              <Link key={index} href={item.link}>
                <li>{item.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RightSideItem;
