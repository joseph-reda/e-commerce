import React from "react";

function NewsLetter() {
  return (
    <div className="pt-[80px] pb-[120px] bg-[#C09FF2] flex flex-col items-center justify-center">
      <div className="pb-[50px] text-center">
        <h2 className="sm:text-[80px] text-[50px]">NewsLetter</h2>
        <p className="sm:text-[22px] text-[19px] text-[#684b94]">
          Always in touch with us, for your favourite Products
        </p>
      </div>
      <div className="w-[90%] max-w-[500px] h-[55px] text-center flex items-center justify-between bg-white rounded">
        <input
          type="email"
          className="h-[100%] rounded w-[70%] border-none outline-none pl-[20px] text-[20px]"
          placeholder="your email"
          required
        />
        <button className="bg-[#4caf50] w-[30%] h-[55px] font-bold text-white rounded border-none">
          Send
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
