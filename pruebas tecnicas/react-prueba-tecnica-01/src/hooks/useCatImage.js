import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imgenUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ", 3).join(" ");
    console.log(firstWord);
    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    ).then((res) => {
      console.log(res);
      const { url } = res;
      const url_cat = url.split("&")[0];
      setImageUrl(url_cat);
    });
  }, [fact]);
  return { imgenUrl };
}
