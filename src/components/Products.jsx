import React from "react";

import { ApiTopProducts } from "../apifolder/TopProductsApi";
import Product from "./Product";

function Products() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5">
      {ApiTopProducts.map((product, index) => {
        return (
          <div key={product.id}>
            <Product product={product} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
