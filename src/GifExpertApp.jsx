import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  // const handleAddCategory = (category) => {
  //   setCategories([...categories, "Dragon ball"]);
  // };

  return (
    <div className="containter" >
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category, i) => (
          <GitGrid key={i} category={category} />
        ))}
      </ol>
    </div>
  );
};
