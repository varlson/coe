import React from "react";
import RightSideItem from "./RightSideItem";
import { clickHandle } from "../../src/util";

function RightSide() {
  return (
    <div className="font-Jura text-sm">
      <RightSideItem
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="Editais"
        contentName="editais"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />

      <RightSideItem
        contentName="tcc"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="TCCs"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />

      <RightSideItem
        contentName="resolution"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="Resoluções"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />

      <RightSideItem
        contentName="atv"
        icon="Chevron.png"
        clickHandle={clickHandle}
        label="ATVs"
        subMenus={[
          { label: "Edital-1", link: "/edital-1" },
          { label: "Edital-2", link: "/edital-2" },
          { label: "Edital-3", link: "/edital-3" },
          { label: "Edital-4", link: "/edital-4" },
        ]}
      />
    </div>
  );
}

export default RightSide;
