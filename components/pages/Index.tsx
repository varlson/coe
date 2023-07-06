import React from "react";
import { newsData } from "../../test/datas";
import { Cards } from "../ui/Cards";
import LeftSide from "../ui/LeftSide";
import RightSide from "../ui/RightSide";
import Sides from "../ui/RightSideItem";
import { clickHandle } from "../../src/util";
import Slide from "../partials/Slide";

// import { LeftSide, RightSide } from "../ui/Ui";

function Index() {
  return (
    <div className="w-full grid grid-cols-12 px-3 pt-5">
      <div className="hidden lg:block">
        <LeftSide />
      </div>
      <div className="p-2 col-span-12 lg:col-span-10  ">
        <div className="">
          <Slide />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item, key) => (
            <div key={item.id}>
              <Cards
                title={item.title}
                body={item.body}
                img_url={item.img_url}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <RightSide />
      </div>
    </div>
  );
}
export default Index;
