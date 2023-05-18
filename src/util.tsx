import { INews } from "../types/types";
import { newsData } from "../test/datas";

export const filter = (id: string): Promise<INews[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = newsData.filter((data) => data.id === id);
      if (data.length > 0) resolve(data);
      else reject("dados nao obtido");
    }, 1000);
  });
};

export function splitter(text: string) {
  return text.substring(0, 100) + "...";
}

// export const hideShowHandle = () => {};
export const clickHandle = (contentName: string) => {
  let hideShow = document.getElementById(contentName) as any;
  console.log(hideShow.style.maxHeight);

  if (hideShow.style.maxHeight) {
    hideShow.style.maxHeight = null;
    console.log("com altura");
  } else {
    hideShow.style.maxHeight = hideShow.scrollHeight + "px";
    console.log("sem altura");
  }
};
