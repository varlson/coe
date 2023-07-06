import Button from "./Button";

// @flow
type CardProps = {
  title: string;
  resume: string;
  date: string;
  img: string;
};
import { INews } from "../../types/types";
import { splitter } from "../../src/util";
import Link from "next/link";
export function Cards({ id, title, body, img_url }: INews) {
  return (
    <div className="font-Jura border p-2 shadow m-2">
      <div>
        <img className="object-fill rounded " src={img_url} alt="" />
      </div>

      <div className="mb-1 ">
        <p className="text-center">{title}</p>
      </div>

      <div>
        <p className="font-thin text-justify text-sm border-b">
          {splitter(body)}
        </p>
      </div>

      <div className="text-gray-500 smb-1 text-xs">
        <p className="">{Date.now()}</p>
      </div>
      <div className="flex justify-end mt-1">
        <Link href={`item/${id}`}>
          <Button label="Ver mais" />
        </Link>
      </div>
    </div>
  );
}
