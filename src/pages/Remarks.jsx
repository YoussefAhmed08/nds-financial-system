import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Calender from "../assets/calendar-linear.svg";
import { useTranslation } from "react-i18next";

function Remarks() {
  const { t } = useTranslation();
  const [isSelected, setIsSelected] = useState("archive");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 px-10">
      <div className="flex justify-between px-5">
        <MdKeyboardBackspace
          onClick={() => navigate("/journalentry")}
          className="w-[32px] h-[36px] cursor-pointer text-[#1E2C5F]"
        />
        <div className="w-[35vw] h-[65px] rounded-2xl flex justify-around shadow-md px-10">
          <div
            className={`flex items-center justify-center w-[40%] h-[100%] ${
              isSelected === "journal details"
                ? "border-b-4 rounded-bl rounded-br border-[#E5A812]"
                : "border-b-4 border-b-white"
            }`}
          >
            <button
              onClick={() => {
                setIsSelected("journal details");
                navigate("/journalentry/addjournalentry");
              }}
              className={` text-lg font-semibold ${
                isSelected === "journal details"
                  ? "text-[#E5A812]"
                  : "text-[#979797]"
              }`}
            >
              {t("Journal Details")}
            </button>
          </div>
          <div
            className={`flex items-center justify-center w-[40%] h-[100%] ${
              isSelected === "archive"
                ? "border-b-4 rounded-bl rounded-br border-[#E5A812]"
                : "border-b-4 border-b-white"
            }`}
          >
            <button
              onClick={() => {
                setIsSelected("archive");
                navigate("/journalentry/archive");
              }}
              className={`text-[#979797] text-lg font-semibold ${
                isSelected === "archive" ? "text-[#E5A812]" : "text-[#979797]"
              }`}
            >
              {t("Archive")}
            </button>
          </div>
          <div
            className={`flex items-center justify-center w-[40%] h-[100%] ${
              isSelected === "remarks"
                ? "border-b-4 rounded-bl rounded-br border-[#E5A812]"
                : "border-b-4 border-b-white"
            }`}
          >
            <button
              onClick={() => {
                setIsSelected("remarks");
                navigate("/journalentry/remarks");
              }}
              className={`text-lg font-semibold ${
                isSelected === "remarks" ? "text-[#E5A812]" : "text-[#979797]"
              }`}
            >
              {t("Remarks")}
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-16 -mt-5 ml-5">
        <div className="flex flex-col items-start justify-between h-16">
          <p className="text-[#46433F]  font-bold text-2xl">
            {t("Add Journal Entry")}
          </p>
          <p className="text-[#A1A1A1]  text-lg">
            {t("Add new journal Entry details.")}
          </p>
        </div>
        <div className="flex items-center justify-center rounded-2xl bg-black bg-opacity-5 w-[210px] h-12 text-[#46433F]  text-lg">
          <p>{t("Journal NO")} : 6</p>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-5 ml-5">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg   outline-none"
            placeholder={t("Journal Name")}
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Journal Date")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg   outline-none"
            placeholder={t("Category")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
      </div>
      <div className="bg-[#FAFAFA] w-[95vw] h-[45vh] rounded-2xl flex flex-col">
        <div className="w-[90vw] h-[35vh] m-10 overflow-y-auto scroll">
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-lg ">{t("Check The Account Name Please")}</p>
            <span className="flex gap-3">
              <p className=" text-[#8D8D8D]">30-03-2024</p>
              <p className=" text-[#8D8D8D]">03:55 PM</p>
              <p className=" text-[#8D8D8D]">{t("BY : Youssef Ahmed")}</p>
            </span>
            <hr className="w-[95%] pb-2" />
          </div>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder={t("Write Remarks Here ..")}
            className="rounded-xl w-[75vw] h-[8vh] pl-5 ml-5 shadow-md  text-lg outline-none"
          />
          <button className="w-[15vw] h-[8vh] bg-[#0472EF] text-white rounded-xl  text-lg">
            {t("ADD REMARKS")}
          </button>
        </div>
      </div>
      <button className="text-lg  font-semibold text-white bg-[#1E2C5F] w-[196px] h-[53px] rounded-2xl mb-5">
        {t("SAVE")}
      </button>
    </div>
  );
}

export default Remarks;
