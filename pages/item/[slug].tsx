import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { newsData } from "../../test/datas";
import { INews } from "../../types/types";
import { filter } from "../../src/util";
import NewsCard from "../../components/partials/NewsCard";
import Spinner from "../../components/ui/Spinner";

function News() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState<INews | string>("");
  const { slug } = router.query;

  useEffect(() => {
    async function getFiltred(slug: string) {
      filter(slug)
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setNews(res[0]);
        })
        .catch((error) => {
          setNews(error);
          setIsLoading(false);
          console.log(error);
        });
    }

    getFiltred(slug as string);
  }, []);

  if (isLoading)
    return (
      <div className="m-auto w-9/12 flex justify-center">
        <Spinner />
      </div>
    );
  return (
    <div className="m-auto md:w-9/12 text-justify p-2 md:p-0">
      {" "}
      {typeof news === "string" ? news : <NewsCard news={news} />}
    </div>
  );
}

export default News;
