import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import BoldToggle from "../assets/vuesax-bold-toggle-on-circle.svg";
import BoldToggleOff from "../assets/vuesax-bold-toggle-off-circle.svg";
import { useMoveBack } from "../hooks/useMoveBack";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function AddLevelStructure() {
  const [isToggled, setIsToggled] = useState(true);
  const { t } = useTranslation();
  function toggleOnOff() {
    setIsToggled(() => !isToggled);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10 w-[471px] h-[485px] bg-white rounded-2xl shadow-md">
      <p className="-ml-36 font-bold text-2xl leading-7 text-[#46433F]">
        {t("Add New Level")}
      </p>
      <div className="-ml-20 flex flex-col gap-5">
        <div className="flex items-center bg-white w-[260px] h-[65px] justify-between pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none h-[65px]"
            placeholder={t("Level Name")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
          <p className="text-lg ml-10 text-[#46433F]">{t("Level")}</p>
        </div>
        <div className="flex items-center bg-white w-[260px] h-[65px] justify-between pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none h-[65px]"
            placeholder={t("Code Length")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
          <p className="text-lg ml-10 text-[#46433F]">{t("Digits")}</p>
        </div>
      </div>
      <p className="-ml-48 text-lg text-[#46433F]">{t("Is it last level ?")}</p>
      <img
        onClick={toggleOnOff}
        src={isToggled ? BoldToggleOff : BoldToggle}
        alt="bold toggle"
        className="w-9 h-6 -ml-72 cursor-pointer -mt-8 -mb-5"
      />
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[317px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold"
      >
        {t("Add")}
      </Link>
    </div>
  );
}

export default AddLevelStructure;
