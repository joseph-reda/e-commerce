import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ApiSlider } from "../apifolder/SliderApi";

function Slider() {
  const [slides] = useState(ApiSlider);
  const [slidesActive, setSlidesActive] = useState(0);

  const handleNextSlide = () => {
    setSlidesActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setSlidesActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const activeSlide = slides.filter((_, index) => index === slidesActive);

  return (
    <div className="p-[5px] sm:p-[50px]">
      {activeSlide.map((slide) => (
        <div
          key={slide.id}
          className="sm:grid hidden grid-rows lg:grid-cols-3 justify-between items-center lg:gap-[100px] gap-5"
        >
          <div className="flex items-center justify-center z-10 gap-5 px-10 lg:col-span-2">
            <div className="leftArrow" onClick={handlePrevSlide}>
              <FontAwesomeIcon
                style={{ fontSize: "50px" }}
                className="rounded-full cursor-pointer shadow-sm hover:bg-gray-100 p-2"
                icon={faArrowLeft}
              />
            </div>
            <img
              src={slide.src}
              alt="Background 1"
              className="h-[500px] rounded flex items-center"
            />
            <div className="rightArrow" onClick={handleNextSlide}>
              <FontAwesomeIcon
                style={{ fontSize: "50px" }}
                className="rounded-full cursor-pointer shadow-sm hover:bg-gray-100 p-2"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="info flex flex-col items-center gap-5">
            <h2 className="text-[50px]">{slide.info.h2}</h2>
            <p className="text-[18px]">{slide.info.p}</p>
            <button className="btn w-[100%] text-[18px]">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
