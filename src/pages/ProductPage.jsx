import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

import img from "../images/prod-1.jpeg";
import Counter from "../components/Counter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-20 m-[80px] items-center justify-cente">
        <div className="">
          <img
            src={img}
            alt="product"
            className=" shadow-lg rounded-xl w-[550px] h-[550px] hover:scale-105 ease-in-out duration-200"
          />
        </div>
        <div className="lg:w-[80%] ">
          <h2 className="text-[50px]">Product</h2>
          <p className="text-[18px] py-5 lg:w-[70%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            laudantium totam ratione labore culpa excepturi facere ullam unde,
            deserunt quis ducimus molestias cupiditate ea, nihil illo
            reprehenderit, repellendus voluptas ipsum.
          </p>
          <div className="flex flex-col gap-5 pb-5 lg:text-[25px] text-[20px] md:items-center md:justify-center md:gap-10">
            <h4>
              PRICE: <span className="text-[35px] font-bold">$555</span>
            </h4>
            <div className=" flex items-center gap-3">
              <span className="mr-5">Color:</span>
              <div className=" rounded-full w-[30px] h-[30px] border bg-black"></div>
              <div className=" rounded-full w-[30px] h-[30px] border bg-black"></div>
              <div className=" rounded-full w-[30px] h-[30px] border bg-black"></div>
            </div>
            <div className="flex gap-5">
              <span>Size:</span>
              <select
                name="sdcws"
                id=""
                className="border-2 rounded p-1 outline-none"
              >
                <option value="1">sm</option>
                <option value="2">md</option>
                <option value="3">x</option>
                <option value="3">xl</option>
                <option value="3">xxl</option>
              </select>
            </div>
            <Counter />
          </div>
          <button className="btn w-[100%]">ADD TO CHART</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductPage;
