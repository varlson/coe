import React, { useEffect, useState } from "react";

import {
  ExpandCurso,
  ExpandInfra,
  ExpandInicio,
  ExpandPesquisa,
  ExpandBolsa,
} from "../ui/Ui";
import { IncialValue, subNavSwitcher } from "../../services/util";
import Link from "next/link";
export default function SubNavBar() {
  useEffect(() => {
    let spand = document.getElementById("inicio") as any;
    spand.style.maxHeight = spand.scrollHeight + "px";
    setHideElement((prevState: any) => ({ ...prevState, ["inicio"]: true }));
  }, []);

  const [hideElement, setHideElement] = useState<any>({
    curso: false,
    infra: false,
    inicio: false,
    pesquisa: false,
    bolsa: false,
  });

  const expandHandler = (e: any) => {
    let key = e.target.id;
    let spand = document.getElementById(key) as any;
    if (hideElement[key]) {
      spand.style.maxHeight = null;
      setHideElement((prevState: any) => ({ ...prevState, [key]: false }));
    } else {
      setHideElement(IncialValue);
      spand.style.maxHeight = spand.scrollHeight + "px";
      setHideElement((prevState: any) => ({ ...prevState, [key]: true }));
    }
    console.log(hideElement);
  };

  return (
    <div className=" bg-darkRed font-Jura text-white rounded">
      <ul className="grid grid-cols-5 text-center gap-1">
        <li
          className={`${
            hideElement.inicio && "bg-basicRed"
          }   px-5 py-2 rounded-t w-full cursor-pointer`}
        >
          <div className="nav-item">
            <Link href={"/"}>
              <span>Início</span>
            </Link>
            <img
              id="inicio"
              onClick={(e) => {
                expandHandler(e);
              }}
              className="h-5"
              src="/icons/expand_arrow.png"
              alt=""
            />
          </div>
        </li>
        <li
          className={`${
            hideElement.curso && "bg-basicRed"
          }   px-5 py-2 rounded-t w-full cursor-pointer`}
        >
          <div className="nav-item">
            <span>Curso</span>
            <img
              onClick={(e) => {
                expandHandler(e);
              }}
              id="curso"
              className="h-5"
              src="/icons/expand_arrow.png"
              alt=""
            />
          </div>
        </li>
        <li
          className={`${
            hideElement.infra && "bg-basicRed"
          }   px-5 py-2 rounded-t w-full cursor-pointer`}
        >
          <div className="nav-item">
            <span>Infraestrutura</span>
            <img
              onClick={(e) => {
                expandHandler(e);
              }}
              id="infra"
              className="h-5"
              src="/icons/expand_arrow.png"
              alt=""
            />
          </div>
        </li>
        <li
          className={`${
            hideElement.pesquisa && "bg-basicRed"
          }   px-5 py-2 rounded-t w-full cursor-pointer`}
        >
          <div className="nav-item">
            <span>Pesq. e Extensão</span>
            <img
              onClick={(e) => {
                expandHandler(e);
              }}
              id="pesquisa"
              className="h-5"
              src="/icons/expand_arrow.png"
              alt=""
            />
          </div>
        </li>
        <li
          className={`${
            hideElement.bolsa && "bg-basicRed"
          }   px-5 py-2 rounded-t w-full cursor-pointer`}
        >
          <div className="nav-item">
            <span>Bolsas</span>
            <img
              onClick={(e) => {
                expandHandler(e);
              }}
              id="bolsa"
              className="h-5"
              src="/icons/expand_arrow.png"
              alt=""
            />
          </div>
        </li>
      </ul>
      <div className="height" id="subNav">
        {hideElement.inicio && <ExpandInicio />}
        {hideElement.infra && <ExpandInfra />}
        {hideElement.curso && <ExpandCurso />}
        {hideElement.bolsa && <ExpandBolsa />}
        {hideElement.pesquisa && <ExpandPesquisa />}
      </div>
    </div>
  );
}
