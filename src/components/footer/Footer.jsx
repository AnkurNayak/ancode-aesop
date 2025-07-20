import { GoArrowRight } from "react-icons/go";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="text-[#FFFEF2] bg-[#333333]">
      <div className="padding__x py-20 sm:py-[50px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">
            Subscribe to Aesop communications
          </div>
          <Divider />
          <div className="h-9 rounded border boorder-[#FFFEF2] flex items-center px-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-full outline-none bg-transparent placeholder:text-[#FFFEF2]"
            />
            <button>
              <GoArrowRight />
            </button>
          </div>
          <div className="text-xs sm:text-sm flex gap-2 justify-start items-start">
            <input type="checkbox" className="cursor-pointer mt-0.5" />
            <p>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our privacy policy.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">
            Orders and support
          </div>
          <Divider />
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Contact us <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            FAQs <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Shipping <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Returns <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Order history
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Check gift card balance
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Terms and conditions
          </button>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">Services</div>
          <Divider />
          <button className="flex max-w-max text-xs sm:text-sm">
            Live assistance
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Corporate gifts
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Facial Appointments
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Click and Collect
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Video consultation
          </button>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">
            Location preferences
          </div>
          <Divider />
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-[13px] sm:text-[15px] font-medium">
              Shipping:
            </h4>
            <button className="flex underline text-xs sm:text-sm">
              Hong Kong, SAR
            </button>
          </div>
          <div className="flex flex-col space-y-2.5">
            <h4 className="text-[13px] sm:text-[15px] font-medium">
              Language:
            </h4>
            <div className="flex flex-col">
              <button className="flex underline text-xs sm:text-sm">
                English
              </button>
              <button className="text-xs sm:text-sm flex">繁體中文</button>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">
            Sustainability
          </div>
          <Divider />
          <p className="text-xs sm:text-sm text-pretty">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. Learn more
          </p>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">About</div>
          <Divider />
          <button className="flex max-w-max text-xs sm:text-sm">
            Our story
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Foundation
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">Careers</button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Privacy policy
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Accessibility
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">
            Cookie Policy
          </button>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="text-[13px] sm:text-[15px] font-medium">
            Social media
          </div>
          <Divider />
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Instagram <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Twitter <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            LinkedIn <HiOutlineArrowUpRight size={14} />
          </button>
          <button className="flex max-w-max text-xs sm:text-sm">WeChat</button>
          <button className="flex max-w-max text-xs sm:text-sm items-center gap-1">
            Weibo <HiOutlineArrowUpRight size={14} />{" "}
          </button>
        </div>
      </div>
      <div className="w-full">
        <Divider />
        <h4 className="padding__x flex h-[72px] items-center">© Aesop</h4>
      </div>
    </footer>
  );
};

const Divider = () => {
  return <div className="h-px bg-[#FFFEF2] w-full"></div>;
};

export default Footer;
