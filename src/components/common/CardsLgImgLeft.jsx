import CardsTexts from "./CardsTexts";
import PictureComponent from "./PictureComponent";

const CardsLgImgLeft = ({
  imgUrlLg,
  imgUrlMd,
  imgUrlSm,
  tag,
  title,
  content,
  btnText,
}) => {
  return (
    <div className="padding__container grid grid-cols-12">
      <div className="col-span-12 lg:col-span-7 max-lg:mb-[30px] overflow-hidden padding__r__img">
        <PictureComponent
          imgUrlLg={imgUrlLg}
          imgUrlMd={imgUrlMd}
          imgUrlSm={imgUrlSm}
        />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <CardsTexts
          tag={tag}
          title={title}
          content={content}
          btnText={btnText}
        />
      </div>
    </div>
  );
};

export default CardsLgImgLeft;
