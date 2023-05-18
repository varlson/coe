import React from "react";
import { INews } from "../../types/types";
import Spinner from "../ui/Spinner";
type NewsProps = {
  news: INews;
};
function NewsCard({ news }: NewsProps) {
  return (
    <div className="font-Jura">
      <p className="text-center font-bold p-2">{news.title}</p>
      <img className="w-full h-96 rounded-md" src={news.img_url} alt="" />
      <p>{news.date.toDateString()}</p>
      <div className="my-5">{news.body}</div>
    </div>
  );
}

export default NewsCard;
