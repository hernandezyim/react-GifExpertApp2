import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((img) =>
      setState({ ...state, data: img, loading: false })
    );
  }, [category, state]);

  return state;
};
