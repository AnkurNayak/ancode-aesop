import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PictureComponent from "./PictureComponent";

const SquareBox = ({
  imgUrlLg,
  imgUrlMd,
  imgUrlSm,
  vidUrl,
  imgTitle,
  imgContent,
  vidTitle,
  vidContent,
}) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="grid sm:grid-cols-2 padding__container padding__container__x gap-4">
      <div className="flex flex-col space-y-5">
        <PictureComponent
          imgUrlLg={imgUrlLg}
          imgUrlMd={imgUrlMd}
          imgUrlSm={imgUrlSm}
        />
        <div
          className="cursor-pointer max-w-max flex flex-col leading-5 relative"
          onMouseEnter={() => setHoveredItem("first")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h1>{imgTitle}</h1>
          <AnimatePresence>
            {hoveredItem === "first" && (
              <motion.div
                key="first"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-[#333333] h-px absolute top-full"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="text-sm">{imgContent}</p>
      </div>
      <div className="flex flex-col space-y-5">
        <div>
          <video
            src={vidUrl}
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
        </div>
        <div
          className="cursor-pointer max-w-max flex flex-col leading-5 relative"
          onMouseEnter={() => setHoveredItem("second")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <h1>{vidTitle}</h1>
          <AnimatePresence>
            {hoveredItem === "second" && (
              <motion.div
                key="second"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full bg-[#333333] h-px absolute top-full"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="text-sm">{vidContent}</p>
      </div>
    </div>
  );
};

export default SquareBox;
