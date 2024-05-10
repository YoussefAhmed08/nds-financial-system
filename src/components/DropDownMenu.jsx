import React, { forwardRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Bag from "../assets/noun-business-bag-2481314.png";
import Profile from "../assets/profile-2user.png";
import Paper from "../assets/vuesax-linear-receipt-minus.png";
import Clipboard from "../assets/clipboard-tick.png";
import WhiteDot from "../assets/Ellipse 131.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";

const DropDownMenu = forwardRef(({ isOpen, setIsOpen }, ref) => {
  const [background, setBackground] = useState("");
  const location = useLocation();

  const { t } = useTranslation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath.includes("/corprates")) {
      setBackground("corprates");
      setIsOpen(false);
    } else if (currentPath.includes("/levelstructure")) {
      setBackground("levelstructure");
      setIsOpen(false);
    } else if (currentPath.includes("/chartofacc")) {
      setBackground("chartofacc");
      setIsOpen(false);
    } else if (currentPath.includes("/costcenter")) {
      setBackground("costcenter");
      setIsOpen(false);
    } else if (currentPath.includes("/financialperiod")) {
      setBackground("financialperiod");
      setIsOpen(false);
    } else if (currentPath.includes("/exchangerateandcurrency")) {
      setBackground("exchangerateandcurrency");
      setIsOpen(false);
    } else if (currentPath.includes("/categories")) {
      setBackground("categories");
      setIsOpen(false);
    } else if (currentPath.includes("/closingentry")) {
      setBackground("closingentry");
      setIsOpen(false);
    } else if (currentPath.includes("/journalentry")) {
      setBackground("journalentry");
      setIsOpen(false);
    } else setBackground(""); // Reset background if no match
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      className={`${
        isOpen ? "absolute top-full left-0" : "hidden"
      } w-[377px] h-[671px] overflow-hidden bg-white z-10 rounded-bl-2xl rounded-br-2xl flex flex-col shadow-lg justify-around`}
    >
      <Link
        to="/corporates"
        className={`${
          background === "corprates"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } flex items-center ml-5 mt-5 pl-7 w-[233px] h-[47px] rounded-2xl`}
      >
        <img src={Bag} alt="bag" />
        <p
          className={`${
            background === "corprates" ? "text-[#1E2C5F]" : ""
          } pl-5`}
        >
          {t("Corporates")}
        </p>
      </Link>
      <button
        className={`flex items-center ml-7 pl-5 w-[233px] h-[47px] rounded-2xl`}
      >
        <img src={Profile} alt="Profile" />
        <p className="pl-5">{t("Account Receivables")}</p>
      </button>
      <button
        className={`flex items-center ml-7 pl-5 w-[233px] h-[47px] rounded-2xl`}
      >
        <img src={Paper} alt="bag" />
        <p className="pl-5">{t("Account Receivables")}</p>
      </button>
      <button className={`flex items-center ml-7 pl-5 h-[47px] rounded-2xl`}>
        <img src={Clipboard} alt="bag" />
        <p className="w-[300px]">{t("Manage General Ledger Account")}</p>
        <MdOutlineKeyboardArrowDown className="mr-6 w-5 h-5" />
      </button>

      <p className="text-[#AEAEAE] text-sm pl-10">{t("Settings")}</p>

      <Link
        to="/levelstructure"
        className={`flex items-center ml-7 pl-5 ${
          background === "levelstructureacc"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Level Structure")}</p>
      </Link>
      <Link
        to="/chartofacc"
        className={`flex items-center ml-7 pl-5 ${
          background === "chartofacc"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Chart of Account")}</p>
      </Link>
      <Link
        to="/costcenter"
        className={`flex items-center ml-7 pl-5 ${
          background === "costcenter"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Cost Center")}</p>
      </Link>
      <Link
        to="/financialperiod"
        className={`flex items-center ml-7 pl-5 ${
          background === "financialperiod"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Financial Period")}</p>
      </Link>
      <Link
        to="/exchangerateandcurrency"
        className={`flex items-center ml-7 pl-5 ${
          background === "exchangerateandcurrency"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[280px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Exchange Rate & Currencies")}</p>
      </Link>
      <Link
        to="/categories"
        className={`flex items-center ml-7 pl-5 ${
          background === "categories"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Categories")}</p>
      </Link>
      <Link
        to="/closingentry"
        className={`flex items-center ml-7 pl-5 ${
          background === "closingentry"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Manage Journal Entry")}</p>
      </Link>

      <p className="text-[#AEAEAE] text-sm pl-10">
        {t("Manage Journal Entry")}
      </p>

      <Link
        to="/journalentry"
        className={`${
          background === "journalentry"
            ? "bg-gray-200 text-[#1E2C5F]"
            : "hover:bg-gray-100"
        } flex items-center ml-7 pl-5 w-[250px] h-[30px] rounded-2xl`}
      >
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Journal Entry")}</p>
      </Link>
      <button className="flex items-center ml-7 pl-5 w-[250px] h-[30px] rounded-2xl">
        <img src={WhiteDot} alt="white dot" />
        <p className="text-[#46433F] pl-5">{t("Search Journal Entry")}</p>
      </button>
    </div>
  );
});

export default DropDownMenu;
