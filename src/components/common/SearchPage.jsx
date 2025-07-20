import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useUI } from "../../hooks/UiContext";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const SearchPage = () => {
  const { handleSearchClose } = useUI();
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen w-screen fixed inset-0 flex flex-col bg-white"
      style={{ zIndex: 500 }}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 border-b-2 flex items-center gap-4 padding__x">
          <PiMagnifyingGlassBold size={24} />
          <input
            type="text"
            className="outline-none bg-transparent w-full"
            placeholder="Search"
          />
          <button className="ml-auto" onClick={handleSearchClose}>
            <MdClose size={24} />
          </button>
        </div>
        <SearchRes />
      </div>
    </motion.div>
  );
};

const SearchRes = () => {
  const sItems = [
    "hand wash",
    "shampoo",
    "body cleanser",
    "candle",
    "deodorant",
    "incense",
    "hand balm",
    "body balm",
    "geranium leaf",
    "soap",
  ];

  return (
    <div className="grid grid-cols-12 h-full text-sm">
      <div className="sm:col-span-4 col-span-12 border-r-2 padding__all">
        <p className="font-medium text__disabled">Suggested</p>
        <div className="flex flex-col gap-4 mt-4 font-medium">
          {sItems.map((item, index) => (
            <button key={index} className="text__hover flex">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="sm:col-span-8 padding__all col-span-12"></div>
    </div>
  );
};

export default SearchPage;
