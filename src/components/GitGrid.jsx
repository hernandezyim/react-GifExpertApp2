import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifGridItem } from "./GifGridItem";

export const GitGrid = ({ category }) => {
  const { data, loading } = useFetchGifts(category);

  return (
    <>
      <h1>{category}</h1>

      <div className="card-grid">
        {loading
          ? "loading"
          : data.map((img) => <GifGridItem key={img.id} {...img} />)}
      </div>
    </>
  );
};
