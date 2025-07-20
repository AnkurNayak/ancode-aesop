import { GoArrowRight } from "react-icons/go";

const CustomButtonLarge = ({ title }) => {
  return (
    <button className="flex items-center px-6 h-16 border border-gray-300 w-full max-w-64 hover:bg-[#333333] z-10 hover:text-white transition-all duration-200">
      <span className="text-start leading-5 font-medium text-sm">{title}</span>
      <span className="ml-auto">
        <GoArrowRight />
      </span>
    </button>
  );
};

export default CustomButtonLarge;
