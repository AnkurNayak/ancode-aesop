import CustomButtonLarge from "./CustomButtonLarge";

const CardsLgImgRt = ({ vidUrl, tag, title, content, btnText }) => {
  return (
    <div className="padding__container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 max-lg:mb-[30px]">
        <div className="flex w-full items-center justify-center">
          <div className="px-5 sm:px-[16%]">
            <div className="h-10 flex items-center text-sm font-medium">
              {tag}
            </div>
            <div className="text-3xl">{title}</div>
            <div className="mb-[30px]">{content}</div>
            <CustomButtonLarge title={btnText} />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 padding__l__img">
        <video
          src={vidUrl}
          autoPlay
          loop
          muted
          type="video/mp4"
          alt="video_banner"
          className="h-full w-full min-h-[370px] min-w-[370px]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default CardsLgImgRt;
