import React, { ReactElement } from "react";
import Colegiate from "../components/pages/Colegiate";
import Nde from "../components/pages/Nde";
import Ndee from "../components/pages/Ndee";

export interface INews {
  slug?: string;
  img_url: string;
  title: string;
  body: string;
  id: string;
  date: Date;
}

export interface ISlide {
  title: string;
  image_url: string;
  body: string;
  id: string;
}

export type SlideProps = {
  title: string;
  img_url: string;
};

export type subMenu = {
  label: string;
  link: string;
};

export type sidesProps = {
  clickHandle: (contentName: string) => void;
  label: string;
  subMenus?: subMenu[];
  icon: string;
  contentName: string;
};

enum Instititional {}

export type SobreType = {
  colegiate: ReactElement;
  nde: ReactElement;
  ndee: ReactElement;
};

export const Sobre: SobreType = {
  colegiate: <Colegiate />,
  nde: <Nde />,
  ndee: <Ndee />,
};

export type SobreKeyOf = keyof typeof Sobre;

export type subMenuTypes = {
  label: string;
  link: string;
};
export type menuTogleType = {
  label: string;
  subMenus: subMenuTypes[];
  id: string;
};
