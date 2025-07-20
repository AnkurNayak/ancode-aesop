import React, { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import PictureComponent from "../common/PictureComponent";

const slides = [
  {
    id: 1,
    title: "Screen 1",
    content: "A quartet of staples for the hands, body and home",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/5vSYU8Ls9wpoa46f0DdBf7/2ed2481ed5dfab09d27924786903f9e1/Aesop_Kits_Gift_Kits_2024-25_Screen_1_HK_NA_Web_Front_A_X-Large_3000x1822px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/3Vaw9OJhkbxbG6suW2kOQZ/5cf0869195e1727ef9a5036497367107/Aesop_Kits_Gift_Kits_2024-25_Screen_1_HK_NA_Web_Front_A_Large_1800X1093px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/2TaIEgAcjkWIDwhf4DabzA/50e30dc51183762c1b6307f1e537d997/Aesop_Kits_Gift_Kits_2024-25_Screen_1_HK_NA_Web_Front_A_Medium_1000x608px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/6yUIBb1OtSO2xdCUFHRNir/a8b32246e3ec8935592002fbd475cc37/Aesop_Kits_Gift_Kits_2024-25_Screen_1_HK_NA_Web_Front_A_Small_700x425px.png",
  },
  {
    id: 2,
    title: "Screen 2",
    content: "A trio of Geranium Leaf Body Care essentials",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/6ldttyFcEzvYrNAUJmVqQs/8730cf79917fe943650565636c428387/Aesop_Kits_Gift_Kits_2024-25_Screen_2_GL_Web_Front_A_X-Large_3000x1822px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/17hdUAXJmV8qKo29AmBnjv/c082a00792216bfb439b23891ee216e5/Aesop_Kits_Gift_Kits_2024-25_Screen_2_GL_Web_Front_A_Large_1800X1093px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/1BVXAIrPjKGFn43Czo5n1U/fb1a1dccae22101d74cb8cdfd17b0824/Aesop_Kits_Gift_Kits_2024-25_Screen_2_GL_Web_Front_A_Medium_1000x608px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/3eLF7d9TQy2nXH6dsyrDJy/3c7edf9008bed2b006971a776b771aa8/Aesop_Kits_Gift_Kits_2024-25_Screen_2_GL_Web_Front_A_Small_700x425px.png",
  },
  {
    id: 3,
    title: "Screen 3",
    content: "A trio of hand and body care staples",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/bEOS6r34wbpzplDNdKqhr/eaf93053c422c70a1855ce86a578dcae/Aesop_Kits_Gift_Kits_2024-25_Screen_3_GL_Web_Front_A_X-Large_3000x1822px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/4nHdvNkLIjs8koPndRjTQ5/65be571a4a3afa145e311380fab562d3/Aesop_Kits_Gift_Kits_2024-25_Screen_3_GL_Web_Front_A_Large_1800X1093px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/6vf2XSfdI47AJwB9oBC5v0/0a68286438a801601d7f0b3b394940c1/Aesop_Kits_Gift_Kits_2024-25_Screen_3_GL_Web_Front_A_Medium_1000x608px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/7pl4FmdYcwUVem5uNOzztL/35b462049bf8e198d838b84cb1c43bf2/Aesop_Kits_Gift_Kits_2024-25_Screen_3_GL_Web_Front_A_Small_700x425px.png",
  },
];

const CarouselSliderWithHeader = () => {
  const slider = useRef(null);
  const barMainWidth = useRef(null);
  const [barW_1, setBarW_1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth >= 1024 ? 2 : window.innerWidth >= 640 ? 3 : 3
  ); // Default to 3 slides
  const [isNextShow, setIsNextShow] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(
    windowWidth >= 640 ? true : false
  );

  useEffect(() => {
    if (windowWidth >= 1024 && currentSlide === 1) {
      setIsNextShow(false);
    } else if (windowWidth >= 640 && windowWidth < 1024 && currentSlide === 2) {
      setIsNextShow(false);
    } else if (windowWidth <= 640 && currentSlide === 2) {
      setIsNextShow(false);
    } else {
      setIsNextShow(true);
    }
  }, [windowWidth, currentSlide]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      setSlidesToShow(2);
    } else if (windowWidth >= 640) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(3);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (barMainWidth) {
      setBarW_1(barMainWidth.current.offsetWidth);
    }
  }, [windowWidth]);

  useEffect(() => {
    windowWidth >= 640 ? setIsHeaderVisible(true) : setIsHeaderVisible(false);
  }, [windowWidth]);

  //   console.log(currentSlide);

  // console.log(barW_1);

  //   console.log("currSlide", currentSlide);
  //   console.log("sss", slidesToShow);
  // console.log(currentSlide);
  const btnPrevAnim = {
    initial: {
      marginLeft: windowWidth >= 1024 ? -80 : 0,
      transition: { duration: 0.3 },
    },
    animate: { marginLeft: 0, transition: { duration: 0.3 } },
  };

  const btnNextAnim = {
    initial: {
      marginRight: windowWidth >= 1024 ? -80 : 0,
      transition: { duration: 0.3 },
    },
    animate: { marginRight: 0, transition: { duration: 0.3 } },
  };

  var settings = {
    infinite: false,
    speed: 500,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
    // adaptiveHeight: true,
    // rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // rows: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
          // rows: 1,
        },
      },
    ],
  };

  // console.log(isHeaderVisible);

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="relative cursor-pointer carousel__with__header"
    >
      <motion.button
        variants={btnPrevAnim}
        onClick={() => slider?.current?.slickPrev()}
        className="bg-[#333333] text-white top-1/2 left-0 h-12 w-12 lg:h-20 lg:w-20 flex items-center justify-center z-50"
        style={{
          position: "absolute",
          transform: "translateY(-50%)",
          zIndex: 50,
          visibility: currentSlide === 0 ? "hidden" : "visible",
        }}
      >
        <SlArrowLeft size={24} />
      </motion.button>
      {!isHeaderVisible && (
        <div className="flex flex-col sm:flex-row lg:flex-col mx-5 mb-[60px] cursor-default">
          <div className="flex flex-col w-full mb-[19px] ">
            <h1 className="text-3xl">Our latest Gift Kits</h1>
          </div>
          <div>
            <p className="text-sm w-full mb-[30px]">
              Discover the new cinema-inspired collection, comprising a hand and
              body gift set, an abundant home gift and a Geranium Leaf body care
              trio.
            </p>
            <button className="text-[15px] flex items-center">
              Browse Gift Kits
              <GoArrowRight />
            </button>
          </div>
        </div>
      )}
      <Slider {...settings} ref={slider} className="h-full">
        {isHeaderVisible && (
          <div className="flex flex-col sm:flex-row lg:flex-col cursor-default">
            <div className="flex flex-col w-full pr-[34px] mb-[19px]">
              <h1 className="text-3xl min-w-32">Our latest Gift Kits</h1>
            </div>
            <div>
              <p className="text-sm w-full mb-[30px]">
                Discover the new cinema-inspired collection, comprising a hand
                and body gift set, an abundant home gift and a Geranium Leaf
                body care trio.
              </p>
              <button className="text-[15px] flex items-center">
                Browse Gift Kits
                <GoArrowRight />
              </button>
            </div>
          </div>
        )}
        {slides.map((slide) => (
          <div key={slide.id} className="sm:pt-28">
            <div className="h-full flex items-center justify-center">
              <PictureComponent
                imgUrlXl={slide.imgXl}
                imgUrlLg={slide.imgLg}
                imgUrlMd={slide.imgMd}
                imgUrlSm={slide.imgSm}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-medium hover:underline cursor-pointer leading-10">
                {slide.title}
              </h1>
              <p className="text-sm">{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
      <motion.button
        variants={btnNextAnim}
        onClick={() => slider?.current?.slickNext()}
        className="bg-[#333333] text-white top-1/2 right-0 h-12 w-12 lg:h-20 lg:w-20 flex items-center justify-center"
        style={{
          position: "absolute",
          transform: "translateY(-50%)",
          zIndex: 50,
          visibility: isNextShow ? "visible" : "hidden",
        }}
      >
        <SlArrowRight size={24} />
      </motion.button>
      <div className="relative mx-5 sm:mx-10 lg:mx-20">
        <div
          className="h-0.5 bg-[rgba(0,0,0,0.2)] absolute bottom-0 w-full"
          ref={barMainWidth}
        ></div>
        {barW_1 && (
          <div
            className="absolute bottom-0 h-0.5 bg-black"
            style={{
              transition: "left 0.5s ease",
              left: `${(currentSlide / slidesToShow) * 100}%`,
              width: `${barW_1 / slidesToShow}px`,
            }}
          ></div>
        )}
      </div>
    </motion.div>
  );
};

export default CarouselSliderWithHeader;
