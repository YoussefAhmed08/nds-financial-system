import Kash from "../assets/Mask Group 5.png";
import Planet from "../assets/global-linear.png";
import Profile from "../assets/profile-icon-9.png";
import Dots from "../assets/Group 398.png";
import Change from "../assets/noun-change-3324279.svg";
import ArrowUp from "../assets/Group 473.png";
import ArrowDown from "../assets/Group 475.png";
import DropDownSmall from "./DropDownSmall";
import DropDownMenu from "./DropDownMenu";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../hooks/i18n";

function Header() {
  const [isExpand, setIsExpand] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const ref = useRef();

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsExpand(false);
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="flex justify-between items-center m-12">
      <div
        className={`relative kash flex justify-around items-center w-[377px] h-[65px] bg-white shadow-sm border-gray-300 rounded-lg`}
      >
        <img
          src={Kash}
          alt="Mask Group"
          className="w-[43px] h-[31px] bg-transparent bg-no-repeat"
        />
        <p className="text-left font-bold text-lg leading-5 text-gray-700">
          {t("Kash Now")}
        </p>
        <div></div>
        <div className="flex gap-8 items-center">
          {" "}
          <img src={Change} alt="change" className="w-[14px] h-[18px]" />
          <img
            id="closeAgain"
            onClick={toggleOpen}
            src={isOpen ? ArrowDown : ArrowUp}
            alt={isOpen ? "arrow down" : "arrow up"}
            className="w-[32px] h-[21px] bg-gray-200 rounded-full text-white cursor-pointer"
          />
        </div>
        <DropDownMenu ref={ref} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="flex justify-between items-center w-[377px] h-[65px]">
        <button
          onClick={() => {
            i18n.language === "ar"
              ? i18n.changeLanguage("en")
              : i18n.changeLanguage("ar");
          }}
          className="w-[55px] h-[65px] cursor-pointer shadow-lg flex flex-col items-center justify-center rounded-2xl"
        >
          <img src={Planet} alt="global-linear" className="w-[24px] h-[24px]" />
          <p className="text-[#979797] font-montserrat">
            {i18n.language === "ar" ? "AR" : "EN"}
          </p>
        </button>
        <div className="flex items-center gap-10">
          <img
            src={Profile}
            alt=""
            className="w-[63px] h-[63px] shadow-sm border-[5px] border-gray-300 rounded-full"
          />
          <div>
            <p className=" font-semibold text-lg font-montserrat">
              Youssef Ahmed
            </p>
            <p className="text-left font-normal text-sm font-montserrat text-gray-400">
              Frontend Developer
            </p>
          </div>
          <button
            onClick={() => setIsExpand(() => !isExpand)}
            className="relative w-6 flex items-center justify-center"
          >
            <img
              src={Dots}
              alt=""
              className="dots w-[4px] h-[16px] cursor-pointer"
            />
            <DropDownSmall ref={ref} isExpand={isExpand} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
