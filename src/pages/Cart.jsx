import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

import img1 from "../images/prod-1.jpeg";
import img2 from "../images/prod-6.jpeg";
import img3 from "../images/prod-12.jpeg";
import img4 from "../images/prod-8.jpeg";

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col m-5">
        <div className="flex flex-col gap-10 mb-[20px]">
          <h2 className="text-[50px] text-center">Cart</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-between">
            <button className="btn px-[20px] py-3 text-[18px]">
              continue Shopping
            </button>
            <ul className="flex gap-5 items-center justify-center">
              <li className="text-[17px] underline">items in your Cart: 2</li>
              <li className="text-[17px] underline">WhishList items: 0</li>
            </ul>
            <button className="btn px-[20px] py-3 text-[18px]">
              Chekout Now
            </button>
          </div>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
            <div className="flex items-center gap-5 sm:justify-between border-2 rounded p-3">
              <div className="flex gap-5">
                <img
                  src={img1}
                  alt=""
                  className="w-[250px] h-[300px] rounded shadow-lg"
                />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-5">
                    <span className="font-bold">ID:</span>
                    <span>12598713</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Product:</span>
                    <span></span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Color:</span>
                    <span className="bg-red-500 rounded-full p-3"></span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Size:</span>
                    <span>M</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:justify-between border-2 rounded p-3">
              <div className="flex gap-5">
                <img
                  src={img2}
                  alt=""
                  className="w-[250px] h-[300px] rounded shadow-lg"
                />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-5">
                    <span className="font-bold">ID:</span>
                    <span>12582967</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Product:</span>
                    <span>T-SHirt</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Color:</span>
                    <span className="bg-green-200 rounded-full p-3"></span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Size:</span>
                    <span>XL</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:justify-between border-2 rounded p-3">
              <div className="flex gap-5">
                <img
                  src={img3}
                  alt=""
                  className="w-[250px] h-[300px] rounded shadow-lg"
                />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-5">
                    <span className="font-bold">ID:</span>
                    <span>12569846</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Product:</span>
                    <span>Jacket</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Color:</span>
                    <span className="bg-zinc-800 rounded-full p-3"></span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Size:</span>
                    <span>M</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-5 sm:justify-between border-2 rounded p-3">
              <div className="flex gap-5">
                <img
                  src={img4}
                  alt=""
                  className="w-[250px] h-[300px] rounded shadow-lg"
                />
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-5">
                    <span className="font-bold">ID:</span>
                    <span>12536478</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Product:</span>
                    <span>Jeans</span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Color:</span>
                    <span className="bg-blue-400 rounded-full p-3"></span>
                  </li>
                  <li className="flex gap-5">
                    <span className="font-bold">Size:</span>
                    <span>XL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Cart;
