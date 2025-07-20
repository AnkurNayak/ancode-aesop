import { FiPlus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useUI } from "../../hooks/UiContext";

const Offer = () => {
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  const handleOfferOpen = () => setIsOfferOpen(true);
  const handleOfferClose = () => setIsOfferOpen(false);

  useEffect(() => {
    if (isOfferOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOfferOpen]);

  return (
    <>
      <AnimatePresence>
        {isOfferOpen && <OfferData onOfferClose={handleOfferClose} />}
      </AnimatePresence>
      <div className="px-5 pt-3 pb-2 bg-[#252525] text-[#FFFEF2] text-sm text-center">
        <div
          onMouseEnter={() => setIsUnderlined(true)}
          onMouseLeave={() => setIsUnderlined(false)}
          className="cursor-pointer flex items-center justify-center"
          onClick={handleOfferOpen}
        >
          <div className="relative flex items-center">
            <h4>
              Enjoy complimentary shipping on orders over $400. Click and
              Collect is now available in Hong Kong.
            </h4>
            <FiPlus className="ml-2" />
            <AnimatePresence>
              {isUnderlined && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="absolute h-px w-full bg-[#FFFEF2] bottom-0"
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

const OfferData = ({ onOfferClose }) => {
  const { state } = useUI();
  return (
    <div className="absolute inset-0 z-50 bg-[#00000080] box-border max-h-screen">
      <motion.div
        initial={{
          marginLeft: state.windowWidth < 1024 ? "-100%" : "-50%",
        }}
        animate={{ marginLeft: 0 }}
        exit={{
          marginLeft: state.windowWidth < 1024 ? "-100%" : "-50%",
        }}
        transition={{ duration: 0.5 }}
        className="bg-[#F6F5F8] w-full lg:w-1/2 h-full flex flex-col"
      >
        <div className="min-h-20 flex items-center w-full justify-between border-b  px-5 sm:px-[34px]">
          <h1 className="text-xl">Shipping fees and delivery times</h1>
          <button onClick={onOfferClose}>
            <IoIosClose size={24} />
          </button>
        </div>
        <div className="max-h-full overflow-y-auto px-5 sm:px-[34px] pt-[34px] pb-20">
          <div className="mt-[30px] border-t border-gray-300 py-[30px] text-sm">
            <div className="flex flex-col">
              <h1 className="font-medium">SF Express (Hong Kong SAR, China)</h1>
              <div className="flex justify-between items-center h-11">
                <p>Orders below $400</p>
                <p>$40</p>
              </div>
              <div className="flex justify-between items-center h-11">
                <p>Orders $400 and over</p>
                <p>Complimentary</p>
              </div>
              <div className="flex justify-between items-center h-11">
                <p>Urban areas</p>
                <p>2-3 business days</p>
              </div>
              <div className="flex justify-between items-center h-11">
                <p>Outlying Islands</p>
                <p>3-5 business days</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-[30px] text-sm">
            <div className="flex flex-col">
              <h1 className="font-medium">Morning Global (Macau SAR, China)</h1>
              <div className="flex justify-between items-center h-11">
                <p>Orders below $400</p>
                <p>$60</p>
              </div>
              <div className="flex justify-between items-center h-11">
                <p>Orders over $400</p>
                <p>Complimentary</p>
              </div>
              <div className="flex justify-between items-center h-11">
                <p>All areas</p>
                <p>5-7 business days</p>
              </div>
              <div className="flex w-full mt-5">
                <p>
                  Regrettably we are unable to accept orders containing
                  Dangerous Goods to Macau SAR, China.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-[30px] text-sm">
            <div className="flex flex-col">
              <h1 className="font-medium">Complimentary samples</h1>
              <div className="flex w-full mt-5">
                <p>
                  Regrettably we are unable to accept orders containing
                  Dangerous Goods to Macau SAR, China.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-[30px] text-sm">
            <div className="flex flex-col">
              <h1 className="font-medium">Click and Collect</h1>
              <div className="flex w-full mt-5">
                <p>
                  Simply choose in-store collection at checkout, then pick up
                  your order at your preferred location.
                </p>
              </div>
              <div className="flex w-full mt-5">
                <p>
                  For general enquiries regarding Click and Collect, we welcome
                  you to phone us on +852 3001 6734 instead of contacting your
                  local store.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 py-[30px] text-sm">
            <div className="flex flex-col">
              <h1 className="font-medium">Returns</h1>
              <div className="flex w-full mt-5">
                <p>
                  Online purchases may be returned to us or any Aesop Stores
                  within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Offer;
