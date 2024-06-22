import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState("0");

  const handelPlusCounter = () => {
    setCounter(+counter + 1);
  };

  const handelPrevCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex gap-5">
      <span>Quantity:</span>
      <span>
        <button
          onClick={handelPrevCounter}
          className="bg-[#8a4af3] px-3 rounded text-white"
        >
          -
        </button>
        <span className="mx-3 border-2 px-3">{+counter}</span>
        <button
          onClick={handelPlusCounter}
          className="bg-[#8a4af3] px-3 rounded text-white"
        >
          +
        </button>
      </span>
    </div>
  );
}

export default Counter;
