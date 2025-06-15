import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   console.log(categories);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);

    //validaomos que el newCategory no exista en nuestro array
    if (categories.includes(newCategory)) return;

    //usamons desestructuracion y el operador spread
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/*Lista de gif */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
