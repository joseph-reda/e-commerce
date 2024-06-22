import React from "react";

function Category({ category }) {
  return (
    <div className="overflow-hidden flex-1 m-2 rounded shadow-lg">
      <img className="w-[100%] h-[500px] rouded" src={category.src} alt="" />
      <div className="info flex items-center justify-between mt-5 mb-4 mx-3">
        <h2 className="text-[30px] font-medium">{category.title}</h2>
        <button className="btn">See More</button>
      </div>
    </div>
  );
}

export default Category;
