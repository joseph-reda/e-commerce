import React from "react";

import { ApiCategories } from "../apifolder/CategoriesApi";
import Category from "./Category";
function Categories() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-between p-5">
      {ApiCategories.map((category) => {
        return <Category category={category} key={category.id} />;
      })}
    </div>
  );
}

export default Categories;
