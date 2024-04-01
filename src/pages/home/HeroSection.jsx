import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselArrow from "../../commons/CarouselArrow";
import CarouselProgressBar from "../../commons/CarouselProgressBar";
// import { hero_data } from "../../mock_data/hero_section_data";
import "./hero.css";
import HeroItemLoader from "../../commons/loaders/HeroItemLoader";
import HeroItem from "./HeroItem";
import { useQuery } from "@tanstack/react-query";
import { getAds } from "../../services/ads-service";

let timer = null;

function HeroSection() {
  let hero_data = [];

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
    if (index === hero_data?.length) {
      setIndex((prev) => 0);
    } else if (index === -1) {
      setIndex((prev) => hero_data?.length - 1);
    }
  }, [index]);

  // Queries
  const ads = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const result = await getAds();
      console.log(result, "result");
      if (result.data.error) {
      }
      return result;
    },
    onError: (error) => {
      console.log("error when fetching ads", error);
    },
  });

  hero_data = ads?.data?.data?.data;

  if (ads.isLoading || ads.isRefetching) {
    return (
      <div className="h-[667px] relative mx-auto mt-4 mb-4 w-[95%]">
        <HeroItemLoader />
      </div>
    );
  }

  if (!hero_data) {
    return <></>;
  }

  return (
    <div
      className="relative mx-auto mt-4 mb-4 w-[95%]"
      style={{ overflow: "hidden" }}
    >
      <div
        className="h-[667px] flex"
        onMouseEnter={() => pauseTimer()}
        onMouseLeave={() => resumeTimer()}
        style={{ overflowX: "", transition: 'all 1.5s ease' , transform: `translateX(${index * -100}%)` }}
      >
        {hero_data?.map((hero, heroIndex) => {
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
            numberOfDots={hero_data?.length}
            selected={index}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
