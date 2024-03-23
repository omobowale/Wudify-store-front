import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "../../commons/CarouselArrow";
import CarouselProgressBar from "../../commons/CarouselProgressBar";
import { hero_data } from "../../mock_data/hero_section_data";
import "./hero.css";
import HeroItem from "./HeroItem";

let timer = null;

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTimer = () => {
    timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 8000);
  };

  const resetTimer = () => {
    clearInterval(timer);
    startTimer();
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  const resumeTimer = () => {
    setIndex(currentIndex);
    startTimer();
  };

  const pauseTimer = () => {
    setCurrentIndex(index);
    stopTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  useEffect(() => {
    if (index === hero_data.length) {
      setIndex((prev) => 0);
    } else if (index === -1) {
      setIndex((prev) => hero_data.length - 1);
    }
  }, [index]);

  return (
    <div className="relative mx-auto mt-4 mb-4 w-[95%]">
      <div
        className="h-[667px] bg-red-100"
        onMouseEnter={() => pauseTimer()}
        onMouseLeave={() => resumeTimer()}
      >
        {hero_data.map((hero, heroIndex) => {
          return (
            <HeroItem
              heroIndex={heroIndex}
              selectionIndex={index}
              hero={hero}
            />
          );
        })}
      </div>
      <div>
        <div className="flex justify-between absolute w-[98%] top-[48vh] left-3">
          <CarouselArrow>
            <MdKeyboardArrowLeft
              className="text-lg"
              onClick={() => {
                setIndex((prev) => --prev);
                resetTimer();
              }}
            />
          </CarouselArrow>
          <CarouselArrow>
            <MdKeyboardArrowRight
              className="text-lg"
              onClick={() => {
                setIndex((prev) => ++prev);
                resetTimer();
              }}
            />
          </CarouselArrow>
        </div>
        <div className="absolute w-[98%] flex gap-1 items-center justify-center bottom-[2vh]">
          <CarouselProgressBar
            numberOfDots={hero_data.length}
            selected={index}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
