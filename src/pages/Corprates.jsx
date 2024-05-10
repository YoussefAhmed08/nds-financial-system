import { RiSearch2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Add from "../assets/vuesax-linear-add.svg";
import CorpratesView from "../components/CorporatesView";

function Corprates() {
  const [corporateName, setCorporateName] = useState("");
  const [motherCompany, setMotherCompany] = useState("");
  const [lineOfBusiness, setLineOfBusiness] = useState("");

  const handleClear = () => {
    setCorporateName("");
    setMotherCompany("");
    setLineOfBusiness("");
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="px-10 flex items-center justify-around gap-5">
        <div className="flex items-center flex-grow w-[232px] h-[65px] bg-white shadow-md rounded-2xl">
          <RiSearch2Line className="opacity-25 w-[24px] h-[24px] ml-5" />
          <input
            value={corporateName}
            onChange={(e) => setCorporateName(e.target.value)}
            type="text"
            placeholder={t("Coroporate name")}
            className="outline-none h-[65px] ml-5"
          />
        </div>
        <div className="flex items-center flex-grow w-[232px] h-[65px] bg-white shadow-md rounded-2xl">
          <RiSearch2Line className="opacity-25 w-[24px] h-[24px] ml-5" />
          <input
            value={motherCompany}
            onChange={(e) => setMotherCompany(e.target.value)}
            type="text"
            placeholder={t("Mother Company")}
            className="outline-none h-[65px] ml-5"
          />
        </div>
        <div className="flex items-center flex-grow w-[232px] h-[65px] bg-white shadow-md rounded-2xl">
          <RiSearch2Line className="opacity-25 w-[24px] h-[24px] ml-5" />
          <input
            value={lineOfBusiness}
            onChange={(e) => setLineOfBusiness(e.target.value)}
            type="text"
            placeholder={t("Line of business")}
            className="outline-none h-[65px] ml-5"
          />
        </div>
        <div className="flex items-center justify-around flex-grow w-[144px] h-[65px] bg-white shadow-md rounded-2xl gap-5">
          <p className="text-[#979797]">{t("Status")}</p>
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="opacity-50 w-[24px] h-[24px] rotate-90"
          />
        </div>
        <button className="w-[90px] h-[65px] bg-[#0472EF] rounded-2xl text-white text-lg flex-grow">
          {t("Search")}
        </button>
        <button
          onClick={handleClear}
          className="w-[90px] h-[65px] bg-[#E1044C] rounded-2xl text-white text-lg flex-grow"
        >
          {t("Clear")}
        </button>
        <Link
          to="/corporates/add"
          className="flex items-center justify-center flex-grow w-[181px] h-[65px] bg-[#1E2C5F] rounded-2xl text-white text-md gap-3"
        >
          <img src={Add} alt="add" className="w-7 h-10" />
          <p className="text-lg">{t("Add Corporate")}</p>
        </Link>
      </div>
      <div className="flex items-center justify-around h-16 bg-[#F7F7F7] rounded-xl mt-10 mx-10">
        <p className="text-base font-normal text-[#727272]">{t("No")}</p>
        <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272]">
          {t("Corporate Name AR")}
        </p>
        <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272] ml-[-40px]">
          {t("Corporate Name EN")}
        </p>
        <p className="text-base font-normal text-[#727272]">
          {t("Creation Date")}
        </p>
        <p className="text-base font-normal text-[#727272] mx-20 w-20">
          {t("Email")}
        </p>
        <p className="text-base font-normal text-[#727272] w-36">
          {t("Line of business")}
        </p>
        <p className="text-base font-normal text-[#727272] mr-[4.5rem]">
          {t("Status")}
        </p>
        <p className="text-base font-normal text-[#727272]">{t("Actions")}</p>
      </div>
      <CorpratesView />
    </>
  );
}

export default Corprates;
