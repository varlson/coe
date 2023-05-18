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
