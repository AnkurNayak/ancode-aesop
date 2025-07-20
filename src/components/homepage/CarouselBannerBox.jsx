import Slider from "react-slick";
import CardsTexts from "../common/CardsTexts";
import PictureComponent from "../common/PictureComponent";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const carouselData = [
  {
    id: 1,
    location: "Aesop ifc mall",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/7a8FlmY12ZQS53gi73SWKo/eeb33cdf220d33186edeba730a3ac371/Aesop_HK_Store_IFC_III_Hero_Bleed_Tablet_1536x864px.jpg",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/1v7Tl2Z5uBjkm0f6NftyoT/9d8248384cc023f02f98ca94746af759/Aesop_HK_Store_IFC_III_Hero_Bleed_Mobile_640x640px.jpg",
  },
  {
    id: 2,
    location: "Aesop Hollywood Road",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/3zcvjyxtts2FpeU5DHqO93/d075d2ac71f0a36fe38fce6fd2fb8155/Aesop_Hollywood_Road_II_Hero_Bleed_Desktop_2880x1620px.jpg",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/5oGiDiVFqrGsMNB5GQlJPf/78b7bd491f8d163a6f414feb7986fb79/Aesop_Hollywood_Road_II_Hero_Bleed_Tablet_1536x864px.jpg",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/1X72jMZUmaahSQZvTtL9ta/646146092302d12fcedca05dcb4dc328/Aesop_Hollywood_Road_II_Hero_Bleed_Mobile_640x640px.jpg",
  },
  {
    id: 3,
    location: "Aesop Venetian Macau II",
    imgLg:
      "https://www.aesop.com/u1nb1km7t5q7/5nCXNArWXByYfegWzHEJW7/b36df9798e899b8d0eed4b3f053a570c/Aesop_MO_Store_Venetian_II_Hero_Bleed_Desktop_2880x1620px.jpg",
    imgMd:
      "https://www.aesop.com/u1nb1km7t5q7/59vfGdqqfleOBZcTSWwmHz/43d3a1725d601aed5093c3be3dc8941a/Aesop_MO_Store_Venetian_II_Hero_Bleed_Tablet_1536x864px.jpg",
    imgSm:
      "https://www.aesop.com/u1nb1km7t5q7/1Y9Lq6Hn0xaEA212a5e55Y/69507d517a174669b450419211a5d450/Aesop_MO_Store_Venetian_II_Hero_Bleed_Mobile_640x640px.jpg",
  },
];

const CarouselBannerBox = () => {
  const slider = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="padding__container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 max-lg:mb-[30px]">
        <CardsTexts
          title={"Store locator"}
          content={
            "Our consultants are available to host you in-store and provide tailored guidance on gift purchases."
          }
          btnText={"Find a nearby store"}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 padding__l__img">
        <motion.div
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="slider-container relative overflow-hidden"
        >
          <motion.button
            variants={btnPrevAnim}
            onClick={() => slider?.current?.slickPrev()}
            className="bg-[#333333] text-white top-1/2 left-0 h-12 w-12 lg:h-20 lg:w-20 flex items-center justify-center z-50"
            style={{
              position: "absolute",
              transform: "translateY(-50%)",
              zIndex: 50,
            }}
          >
            <SlArrowLeft size={24} />
          </motion.button>
          <Slider {...settings} ref={slider}>
            {carouselData.map((data) => (
              <div key={data.id}>
                <PictureComponent
                  imgUrlLg={data.imgLg}
                  imgUrlMd={data.imgMd}
                  imgUrlSm={data.imgSm}
                />
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
            }}
          >
            <SlArrowRight size={24} />
          </motion.button>
          <div className="relative mt-12">
            <div className="h-0.5 bg-[rgba(0,0,0,0.2)] absolute bottom-0 w-full"></div>
            <div
              className="absolute bottom-0 h-0.5 bg-black w-1/3"
              style={{
                transition: "left 0.5s ease",
                left: `${(currentSlide / carouselData.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="mt-24 text-sm">
            {carouselData[currentSlide].location}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselBannerBox;
