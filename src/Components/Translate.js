import React from "react";
import { useEffect, useState } from "react";
import { postData } from "../api/api";

const Translate = ({ text, type }) => {
  // console.log(text);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState("");
  const fecth = async () => {
    if (type == "en") {
      setData(text);
    } else {
      setLoad(true);
      const info = await postData("translate", { text: text || "" });
      if (info?.err) {
        console.log(info?.err)
        setData(text);
        setLoad(false);
      } else {
        // console.log(info);
        setData(info);
        setLoad(false);
      }
    }
  };
  useEffect(() => {
    fecth();
  }, [type, text]);
  return <span>{load ? "..." : data}</span>;
};

export default Translate;
