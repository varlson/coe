import React from "react";
import { INews } from "../../types/types";
import Spinner from "../ui/Spinner";
type NewsProps = {
  news: INews;
};
function NewsCard({ news }: NewsProps) {
  const autor = "Fulano de Tal";
  const data = new Date(news.date);
  const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
  const dataFormatada = data.toLocaleDateString("pt-BR", opcoes as never);

  return (
    <div className="font-Jura">
      <p className="bg-basicBlack text-white my-5 p-7 font-bold  rounded text-xl">
        {news.title}
      </p>
      <img
        className=" object-fill w-full md:h-96 rounded-md"
        src={news.img_url}
        alt=""
      />
      <div className=" text-xs my-2">
        <span>{`${dataFormatada} por, `}</span>
        <span className="font-bold">
          <em>{autor}</em>
        </span>
      </div>
      <div className="my-5">{news.body}</div>
    </div>
  );
}

export default NewsCard;
