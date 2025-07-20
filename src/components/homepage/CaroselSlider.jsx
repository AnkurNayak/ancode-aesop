import React, { useEffect, useRef, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Slider from "react-slick";
import { motion } from "framer-motion";
import PictureComponent from "../common/PictureComponent";

// Sample slides with content
const slides = [
  {
    id: 1,
    title: "Aromatique Hand Balm Trio",
    content: "Three hydrating hand balms, unique in aroma",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/7D7M8jMVQsjwYm5KyoRviZ/8d9dbf2142c221490f48baa649e9c5aa/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_X-Large_3000x1822px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/6zG3G1hBdkLebFmYxmJR6X/04908764c522b4da6f88d8cd6b690536/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_Large_1800X1093px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/1Q6mPopHxJkmIhNM5k36sR/d2d793fd5f24f4887c4cfad9200a0a3a/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_Medium_1000x608px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/1M7AGhCxIcGXRRsMLX8FCc/05d7469d9ec826a9325ff3ca2f47f855/Aesop_Bundles_Festive_Bundles_GL_2024_Hand_Balm_Trio_Web_Front_Small_700x425px.png",
  },
  {
    id: 2,
    title: "Ptolemy Aromatique Candle",
    content: "A sensuous blend of leather, smoke and wood",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/2A9nrbervIX8q6M1PtwYvh/51ac70cec70bb23660edcb42a193b96f/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_X-Large_3000x2621px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/gK70UK0cUqX2HjWYYEADL/5bb0fa22d0433792cac699241bbfaeae/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_Large_1800x1573px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/6ecKG9eX7CEvGedFlYWUo3/a7b237daafaa8c5b16cc24c7b0ad8e20/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_Medium_1000x870px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/6CRMA2u3Ufbih3ailJfWwd/3827697ef98f5ad993520289bb6e1006/Aesop_Home_Ptolemy_Aromatique_Candle_Web_Front_Small_700x609px.png",
  },
  {
    id: 3,
    title: "Reverence Duet",
    content: "A sumptuous pairing for hands",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/4dpMZI6u7UqOBZUyceVIAk/d1ca775f781a3a2ba49f9eee1328cd0c/Aesop_Kits_Reverence_Duet_Web_Front_A_X-Large_3000x1822px.png",

    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/49zAX8areSn5M6MzW8VgU6/cd59141080e11df31ca99a148ac94d49/Aesop_Kits_Reverence_Duet_Web_Front_A_Large_1800x1093px.png",

    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/4sIKXPhSSAcO7VRZfEiFEY/c7e31ce92849adcb06907dd736e53d0b/Aesop_Kits_Reverence_Duet_Web_Front_A_Medium_1000x608px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/2io6yarijVYNywZ4vWsRaY/c57d44b6474afd715da4f7db0a4172b0/Aesop_Kits_Reverence_Duet_Web_Front_A_Small_700x425px.png",
  },
  {
    id: 4,
    title: "Lucent Facial Concentrate",
    content: "A Vitamin C-rich layering serum",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/5ifei9GSDrk49e8h8biAPg/c9e4b79a3ac5a9a491d5ec89ef8597df/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_X-Large_3000x2930px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/3t4Pw4CMMF5ULshh61MaYK/e3b85a9c802815533f1b70664aa6c5d6/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_Large_900x878px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/5xgaHNtfiALlLbEkf5rmfQ/91ada8cde4f1ec39b53fbada61b968b4/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_Medium_800x781px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/6VgQer8oLEAUBWRPVNpUbs/85eec3ace0af7e4964e47a5c790e45f7/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Front_Small_700x684px.png",
  },
  {
    id: 5,
    title: "Bronze Incense Holder",
    content: "Suited to any interior",
    imgXl:
      "https://www.aesop.com/u1nb1km7t5q7/2D4D5QSH1dSzVuTojpeAA9/4ffa4cbadceb068cf58f188b210887ce/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_X-Large_3000x1255px.png",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/6XK2lvnK9rno0Keq5zyYVB/b9f6917829d091f3ea55b207b3138f8b/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_Large_1800x752px.png",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/7DF8zKmAc4Hqkb4DvYvff0/3d5306813aacd453d5654b7263a26f0b/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_Medium_1000x418px.png",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/2HjVljR6sDKGexCvK6yic2/7f045a86ae5541e97c9046d2ff92072f/Aesop_Home_Bronze_Incense_Holder_Web_Front_A_Small_700x292px.png",
  },
];

const CarouselSlider = () => {
  const slider = useRef(null);
  const barMainWidth = useRef(null);
  const [barW_1, setBarW_1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 4 : 5
  ); // Default to 3 slides
  const [isNextShow, setIsNextShow] = useState(true);

  useEffect(() => {
    if (windowWidth >= 1024 && currentSlide === 2) {
      setIsNextShow(false);
    } else if (windowWidth >= 640 && windowWidth < 1024 && currentSlide === 3) {
      setIsNextShow(false);
    } else if (windowWidth <= 640 && currentSlide === 4) {
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
      setSlidesToShow(3);
    } else if (windowWidth >= 640) {
      setSlidesToShow(4);
    } else {
      setSlidesToShow(5);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (barMainWidth) {
      setBarW_1(barMainWidth.current.offsetWidth);
    }
  }, [windowWidth]);

  // console.log(currentSlide);

  // console.log(barW_1);

  // // // console.log(currentSlide);
  // console.log(slidesToShow);
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="relative cursor-pointer carousel__primary "
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
      <Slider {...settings} ref={slider} className="h-full">
        {slides.map((slide) => (
          <div key={slide.id} className="h-full flex flex-col justify-end">
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

export default CarouselSlider;
