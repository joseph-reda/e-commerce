import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Product({ product }) {
  const [showIcons, setShowIcons] = useState(false);

  const handleMouseEnter = () => {
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setShowIcons(false);
  };

  return (
    <div
      className="relative cursor-pointer transition-transform hover:opacity-85 shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={product.src}
        alt="product"
        className="h-[500px] w-[100%] rounded"
      />
      <div
        className={
          showIcons
            ? "icon absolute flex items-center justify-center w-[100%] bottom-1/2 z-30 text-xl gap-5 ease-in-out duration-1000"
            : "hidden"
        }
      >
        <FontAwesomeIcon
          className="p-5 bg-white rounded-full hover:bg-[#8a4af3] hover:scale-[1.12] ease-in-out duration-100 text-zinc-800 hover:text-black"
          icon={faCartShopping}
        />
        <FontAwesomeIcon
          className="p-5 bg-white rounded-full hover:bg-[#8a4af3] hover:scale-[1.12] ease-in-out duration-100 text-zinc-800 hover:text-black"
          icon={faHeart}
        />
        <FontAwesomeIcon
          className="p-5 bg-white rounded-full hover:bg-[#8a4af3] hover:scale-[1.12] ease-in-out duration-100 text-zinc-800 hover:text-black"
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
}
export default Product;
