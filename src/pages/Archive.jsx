import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Calender from "../assets/calendar-linear.svg";
import Gallary from "../assets/vuesax-linear-gallery-add.svg";
import AddCircle from "../assets/vuesax-linear-add-circle.svg";
import { useTranslation } from "react-i18next";

function Archive() {
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
              className={`text-[#979797] text-lg font-semibold ${
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
            type="text"
            className="bg-white rounded-lg   outline-none h-[65px]"
            placeholder={t("Journal Name")}
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg   outline-none"
            placeholder={t("Journal Date")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
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
      <div className="flex gap-5 -mt-5 ml-5">
        <div className="flex items-center justify-center cursor-pointer gap-5 mt-10 rounded-2xl w-[302px] h-[364px] bg-[#F7F7F7]">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={Gallary} alt="gallary add" className="w-8 h-8" />
            <p className="text-[#727272] ">
              {t("Drag / Drop Files")} <br /> {t("Or Click Here")}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden gap-5 mt-10 rounded-2xl max-h-[364px] bg-[#F7F7F7] py-5 scroll">
          <div className="flex items-center gap-5 mt-[320px] px-8">
            <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
              <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
              <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg  text-[#46433F]">{t("File Name")}</p>
              <div className="flex flex-col gap-1">
                <p className=" text-xs text-[#8D8D8D]">31-03-2024</p>
                <p className=" text-xs text-[#8D8D8D]">
                  {t("BY : Youssef Ahmed")}
                </p>
              </div>
              <div className="w-[105px] h-[39px] rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center gap-1 cursor-pointer">
                <img src={AddCircle} alt="cancel" />
                <p className=" text-sm text-red-500">Delete</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
              <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
              <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg  text-[#46433F]">{t("File Name")}</p>
              <div className="flex flex-col gap-1">
                <p className=" text-xs text-[#8D8D8D]">31-03-2024</p>
                <p className=" text-xs text-[#8D8D8D]">
                  {t("BY : Youssef Ahmed")}
                </p>
              </div>
              <div className="w-[105px] h-[39px] rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center gap-1 cursor-pointer">
                <img src={AddCircle} alt="cancel" />
                <p className=" text-sm text-red-500">Delete</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
              <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
              <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg  text-[#46433F]">{t("File Name")}</p>
              <div className="flex flex-col gap-1">
                <p className=" text-xs text-[#8D8D8D]">31-03-2024</p>
                <p className=" text-xs text-[#8D8D8D]">
                  {t("BY : Youssef Ahmed")}
                </p>
              </div>
              <div className="w-[105px] h-[39px] rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center gap-1 cursor-pointer">
                <img src={AddCircle} alt="cancel" />
                <p className=" text-sm text-red-500">Delete</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
              <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
              <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
              <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-lg  text-[#46433F]">{t("File Name")}</p>
              <div className="flex flex-col gap-1">
                <p className=" text-xs text-[#8D8D8D]">31-03-2024</p>
                <p className=" text-xs text-[#8D8D8D]">
                  {t("BY : Youssef Ahmed")}
                </p>
              </div>
              <div className="w-[105px] h-[39px] rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center gap-1 cursor-pointer">
                <img src={AddCircle} alt="cancel" />
                <p className=" text-sm text-red-500">Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="text-lg  font-semibold text-white bg-[#1E2C5F] w-[498px] h-[53px] rounded-2xl ml-[30vw]">
        {t("SAVE")}
      </button>
    </div>
  );
}

export default Archive;
