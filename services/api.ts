import axios from "axios";
const headers = {
  "Content-Type": "multipart/form-data",
};

export const getSlides = async () => {
  return new Promise((res, rej) => {
    axios
      .get("http://localhost:3222/api")
      .then((resp) => {
        res(resp);
      })
      .catch((error) => {
        rej(error);
      });
  });
};

export const addSlides = async (data) => {
  return new Promise((res, rej) => {
    axios
      .post("http://localhost:3222/api/slide", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        res(resp);
      })
      .catch((error) => {
        rej(error);
      });
  });
};
