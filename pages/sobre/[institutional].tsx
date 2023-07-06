import { useRouter } from "next/router";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { getComponent } from "../../src/util";
import Colegiate from "../../components/pages/Colegiate";
import Nde from "../../components/pages/Nde";
import NotFound from "../../components/pages/404";

function Institutional() {
  const router = useRouter();
  const [slug, setSlug] = useState<string>("");
  const { institutional } = router.query;

  type myprop = {
    slug: string;
  };
  const Teste = ({ slug }: myprop) => {
    if (slug === "colegiado") {
      return (
        <div>
          <Colegiate />
        </div>
      );
    } else if (slug === "nde") {
      return (
        <div>
          <Nde />
        </div>
      );
    } else {
      return <NotFound />;
    }
  };

  // useEffect(() => {
  //   console.log(router.query);
  //   setSlug(institutional as string);
  // }, []);

  // if (slug === "")
  //   return (
  //     <>
  //       <div>Processando</div>
  //     </>
  //   );
  return (
    <>
      <Teste slug={institutional as string} />
    </>
  );
}

export default Institutional;
