import { useRef, useState } from "react";
import AesopLogo from "../../common/AesopLogo";
import CustomButtonLarge from "../../common/CustomButtonLarge";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoPauseOutline, IoPlay } from "react-icons/io5";
import Slider from "react-slick";

const bannerData = [
  {
    title: "Timely gifts",
    content:
      "With the festivities fast-approaching, explore a range of gifts fit for all manner of recipients, ready to deliver or collect in-store.",
    btnContent: "Discover more",
    img: "https://videos.ctfassets.net/u1nb1km7t5q7/33VrnC4wUNO6tupurqqxAR/3149e68e8b2cac17112c1a7fd1beb86b/Aesop_Gift_Kits_2024-25_Web_Homepage_3_Primary_50-50_Desktop_1280x720px.mp4",
    isVideo: true,
  },
  {
    tag: "Online only",
    title: "Four bundles for hair, hands and home",
    content:
      "The Home Necessities Duo, Adventurer Hand Care Trio, Basin Essentials and Hair Care Duo are arranged in a gift box suitable for sending directly to recipients. Available exclusively on aesop.com.",
    btnContent: "Explore bundles",
    img: "https://www.aesop.com/u1nb1km7t5q7/1B4yk7Shy8zKGxnqQf92Oe/8822bf6669027bdd7e6eec67f8c1bc5e/Aesop_Bundles_HK_2024_Web_Homepage_Primary_50-50_Desktop_XL_2560x1200px.jpg",
    // imgMd:
    //   "https://www.aesop.com/u1nb1km7t5q7/5vpNVK6wllBuslo8h5RxcK/f688f642e01df2150326d9f8b520ba3f/Aesop_Bundles_HK_2024_Web_Homepage_Primary_50-50_Desktop_1440x810px.jpg",
    // imgSm:
    //   "https://www.aesop.com/u1nb1km7t5q7/6fLaVkkfWtQCoj1gfb7yQn/144b0bc9b651274acf94d58d52d41833/Aesop_Bundles_HK_2024_Web_Homepage_Primary_50-50_Tablet_1536x950px.jpg",
    isVideo: false,
  },
  {
    tag: "Tokens of appreciation",
    title: "Corporate gifts",
    content:
      "Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.",
    btnContent: "Learn more about this service",
    img: "https://www.aesop.com/u1nb1km7t5q7/6yKT7tnKVzVGVp0h75hNYE/ea6850d105b5e1f1dbf1e437fb790a9d/Aesop_Corporate_Gifting_AU_Web_Homepage_Secondary_50-50_Desktop_XL_2560x1200px.jpg",
    // imgMd:
    //   "https://www.aesop.com/u1nb1km7t5q7/1u7HJKpzglOvTtyRPTqQMm/5eaf79549a3692049b0692d8aca0d2f6/Aesop_Corporate_Gifting_AU_Web_Homepage_Secondary_50-50_Desktop_1440x1500px.jpg",
    // imgSm:
    //   "https://www.aesop.com/u1nb1km7t5q7/6r6ecE3d06XrARfn3i5lHM/ee6f1236ab16a78ce94616ba323967f5/Aesop_Corporate_Gifting_AU_Web_Homepage_Secondary_50-50_Tablet_1536x950px.jpg",
    isVideo: false,
  },
];

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  let sliderRef = useRef(null);

  const play = () => {
    setIsPaused(false);
    sliderRef?.current?.slickPlay();
  };

  const pause = () => {
    setIsPaused(true);
    sliderRef?.current?.slickPause();
  };

  const settings = {
    fade: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: false,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="slider-container banner__slick overflow-hidden">
      <div className="absolute top-20 left-[34px] z-20 hidden sm:block">
        <AesopLogo />
      </div>
      <Slider {...settings} className="w-full" ref={sliderRef}>
        {bannerData.map((banner, index) => (
          <div key={index} className="grid grid-cols-4 w-full bg-[#f6f5e8]">
            <div className="max-lg:col-span-4 col-span-2 pt-20 pb-44 max-lg:order-last">
              <div className="flex w-full items-center justify-center lg:ml-20">
                <div className="flex flex-col items-start max-w-xs">
                  {banner.tag && (
                    <h4 className="text-sm font-medium">{banner.tag}</h4>
                  )}
                  <div className="text-3xl mb-[15px]">{banner.title}</div>
                  <div className="mb-[30px]">{banner.content}</div>
                  <CustomButtonLarge title={banner.btnContent} />
                </div>
              </div>
            </div>
            <div className="max-lg:col-span-4 col-span-2 max-lg:order-first">
              {banner.isVideo ? (
                <video
                  key={index}
                  src={banner.img}
                  autoPlay
                  loop
                  muted
                  type="video/mp4"
                  alt="video_banner"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <img
                  key={index}
                  src={banner.img}
                  alt="img_banner"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <div className="col-span-4 flex w-full items-center justify-center mt-1">
              <div className="flex items-center gap-4 max-md:justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => sliderRef?.current?.slickPrev()}>
                    <MdKeyboardArrowLeft size={24} />
                  </button>
                  <span>
                    {currentSlide + 1}/{bannerData.length}
                  </span>
                  <button onClick={() => sliderRef?.current?.slickNext()}>
                    <MdKeyboardArrowRight size={24} />
                  </button>
                </div>
                <button
                  className="ml-4"
                  onClick={isPaused ? play : pause} // Use a simplified ternary operator for toggling
                >
                  {isPaused ? <IoPauseOutline /> : <IoPlay />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const { state } = useUI();

  // const contentRef = useRef(null);

  // useEffect(() => {
  //   const updateMinHeight = () => {
  //     if (contentRef.current) {
  //       const contentHeight = contentRef.current.offsetHeight;
  //       document.querySelector(
  //         ".banner__parent"
  //       ).style.minHeight = `${contentHeight}px`;
  //     }
  //   };
  //   updateMinHeight();
  //   window.addEventListener("resize", updateMinHeight);

  //   return () => window.removeEventListener("resize", updateMinHeight);
  // }, [currentIndex, state.windowWidth]);

  // const togglePlayPause = () => {
  //   setIsPlaying((pv) => !pv);
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + bannerData.length) % bannerData.length
  //   );
  // };

  // useEffect(() => {
  //   if (!isPlaying) return;
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [isPlaying]);

  // return (
  //   <div className="relative banner__parent">
  //     <AnimatePresence mode="wait">
  //       {bannerData.map((item, index) => (
  //         <motion.div
  //           key={index}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: currentIndex === index ? 1 : 0 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ duration: 1.2, ease: "easeInOut" }}
  //           className="absolute w-full h-full flex flex-col"
  //         >
  //           <div className="absolute padding__all">
  //             <AesopLogo />
  //           </div>
  //           <div className="grid grid-cols-2" ref={contentRef}>
  //             <div className="order-last bg-[#f6f5e8] lg:order-first max-lg:col-span-2 flex max-lg:items-center max-lg:justify-center">
  //               <div className="flex flex-col padding__all lg:ml-40 max-lg:max-w-sm pt-[70px] lg:mt-0 sm:pt-[110px] sm:pb-[250px] lg:pt-20">
  //                 {item.tag && (
  //                   <div className="h-10 flex items-center text-sm font-medium">
  //                     {item.tag}
  //                   </div>
  //                 )}
  //                 <div className="text-3xl mb-[15px]">{item.title}</div>
  //                 <div className="mb-[30px]">{item.content}</div>
  //                 <CustomButtonLarge title={item.btnContent} />
  //               </div>
  //             </div>
  //             <div className="max-lg:col-span-2">
  //               {item.isVideo ? (
  //                 <video
  //                   key={index}
  //                   src={item.img}
  //                   className="banner__larger__img"
  //                   autoPlay
  //                   loop
  //                   muted
  //                   type="video/mp4"
  //                   alt="video_banner"
  //                   style={{
  //                     width: "100%",
  //                     height: "100%",
  //                     objectFit: "cover",
  //                   }}
  //                 />
  //               ) : (
  //                 <img
  //                   key={index}
  //                   src={item.img}
  //                   className="banner__larger__img"
  //                   alt="img_banner"
  //                   style={{
  //                     width: "100%",
  //                     height: "100%",
  //                     objectFit: "cover",
  //                   }}
  //                 />
  //               )}
  //             </div>
  //             <div className="flex items-center justify-center w-full z-10 col-span-2 gap-2">
  //               <button onClick={prevSlide}>
  //                 <MdKeyboardArrowLeft size={24} />
  //               </button>
  //               <div>
  //                 {currentIndex + 1}/{bannerData.length}
  //               </div>
  //               <button onClick={nextSlide}>
  //                 <MdKeyboardArrowRight size={24} />
  //               </button>
  //               <button onClick={togglePlayPause} className="ml-4">
  //                 {isPlaying ? <IoPauseOutline /> : <IoPlay />}
  //               </button>
  //             </div>
  //           </div>
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // );
};

export default MainBanner;
