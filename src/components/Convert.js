import React, { useEffect } from "react";
import axios from "axios";

function Convert({ language, text }) {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );
  }, [language, text]);

  return <div> </div>;
}

export default Convert;
