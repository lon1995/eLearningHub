import React from "react";
import { useEffect, useState } from "react";
import { postData } from "../api/api";

export const useTranslate = (text, type) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState("");
  const fecth = async () => {
    if (type === "en") {
      setData(text);
      setLoad(false);
    } else {
      setLoad(true);
      const info = await postData("translate", { text: text || "" });
      if (info?.err) {
        setData(text);
        setLoad(false);
      } else {
        // console.log(info);
        setData(type === "en" ? text : info);
        setLoad(false);
      }
    }
  };
  useEffect(() => {
    fecth();
  }, [type]);
  return load ? "..." : data;
};
