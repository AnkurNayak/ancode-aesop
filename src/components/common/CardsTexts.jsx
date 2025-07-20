import CustomButtonLarge from "./CustomButtonLarge";

const CardsTexts = ({ tag, title, content, btnText }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="px-5 sm:px-[16%]">
        {tag && (
          <div className="h-10 flex items-center text-sm font-medium">
            {tag}
          </div>
        )}
        <div className="text-3xl">{title}</div>
        <div className="mb-[30px]">{content}</div>
        <CustomButtonLarge title={btnText} />
      </div>
    </div>
  );
};

export default CardsTexts;
