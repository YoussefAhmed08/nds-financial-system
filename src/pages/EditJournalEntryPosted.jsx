import { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { useMoveBack } from "../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Calender from "../assets/calendar-linear.svg";
import AddCircle from "../assets/vuesax-linear-add-circle (1).svg";
import Modal from "../components/Modal";
import Reverse from "../components/Reverse";
import { useTranslation } from "react-i18next";

function EditJournalEntryPosted() {
  const { t } = useTranslation();
  const [isSelected, setIsSelected] = useState("journal details");
  const moveBack = useMoveBack();

  return (
    <div className="flex flex-col gap-10 px-10">
      <div className="flex justify-between px-5">
        <MdKeyboardBackspace
          onClick={moveBack}
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
      <div className="flex gap-16 ml-5 -mt-5">
        <div className="flex flex-col items-start justify-between h-16">
          <p className="text-[#46433F]  font-bold text-2xl">
            {t("Edit Journal Entry")}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center w-[210px] h-12 -ml-8 -mt-16">
          <p className="text-[#979797]  text-lg">
            {t("Journal NO")} <br />{" "}
            <p className="text-[#46433F]  text-lg">1</p>
          </p>
        </div>
        <div className="flex items-center justify-center w-[210px] h-12 -ml-8 -mt-16">
          <p className="text-[#979797]  text-lg">
            {t("Journal Status")} <br />{" "}
            <p className="text-[#00C227]  text-lg">{t("Posted")}</p>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8 ml-5">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 mt-5 shadow-md rounded-xl opacity-40">
          <p className="w-44 text-sm -mt-10 text-[#979797]">
            {t("Journal Name")}
          </p>
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none w-[375px] -ml-[140px] mt-3 placeholder-[#46433F]"
            placeholder={t("Noqood")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-5 mt-5 shadow-md rounded-xl opacity-40">
          <p className="w-44 text-sm -mt-10 text-[#979797]">
            {t("Journal Name")}
          </p>
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none w-[275px] -ml-[140px] mt-3 placeholder-[#46433F]"
            placeholder="30-03-2024"
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] mt-5 shadow-md rounded-xl opacity-40">
          <input
            type="text"
            className="bg-white rounded-lg  pl-5 mt-3 placeholder-[#46433F]"
            placeholder={t("Payment")}
          />
          <p className="-ml-[350px] mb-10 text-sm text-[#979797]">
            {t("Category")}
          </p>
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90 mr-5"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 ml-5 opacity-30">
        <button className="flex items-center pl-5 gap-3 w-[162px] h-[48px] rounded-xl shadow-sm bg-[#00C228] text-white  font-medium">
          {/* <img src={Add} alt="add" className="bg- rounded-full" /> */}
          <GoPlusCircle className="w-5 h-5 text-[#00C228] bg-white rounded-full" />
          {t("Add Line")}
        </button>
        <button className="flex items-center pl-5 gap-1 w-[162px] h-[48px] rounded-xl shadow-sm bg-[#E1044C] text-white  font-medium text-sm">
          <img src={AddCircle} alt="" className="w-7 h-7" />
          {t("Clear All Lines")}
        </button>
      </div>
      <div className="flex gap-36 justify-center h-[16vh] rounded-xl w-[50vw] ml-[22vw]">
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tl-xl rounded-bl-xl">
            <p className="text-base font-normal  text-[#727272] ">{t("No")}</p>
          </div>
          <p className="absolute  mt-[144px]">1</p>
          <p className="absolute  mt-[294px]">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Account Name")}
            </p>
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[144px] opacity-30">
            <input
              type="text"
              className="bg-white rounded-lg  outline-none w-[142px] h-[48px]"
              placeholder={t("Interset Incon")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[294px] opacity-30">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none w-[142px] h-[48px]"
              placeholder={t("Credit Card")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Type Of Account")}
            </p>
          </div>
          <p className="absolute  mt-[144px] opacity-30">{t("Expensive")}</p>
          <p className="absolute  mt-[294px] opacity-30">{t("Revenue")}</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Currency")}
            </p>
          </div>
          <div className="flex items-center bg-white w-[102px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[144px] opacity-30">
            <input
              type="text"
              className="bg-white rounded-lg  outline-none w-16 h-[48px]"
              placeholder="USD"
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center bg-white w-[102px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[294px] opacity-30">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none w-16 h-[48px]"
              placeholder="USD"
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Debits")}
            </p>
          </div>
          <div className="flex items-center justify-center absolute  mt-[144px] rounded-xl shadow-md w-[69px] h-[48px] bg-white opacity-30">
            <p className=" text-[#979797]">500</p>
          </div>
          <div className="flex items-center justify-center absolute  mt-[294px] rounded-xl shadow-md w-[69px] h-[48px] bg-white opacity-30">
            <p className=" text-[#979797]">0</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Debits Currency")}
            </p>
          </div>
          <p className="absolute  mt-[144px] text-[#46433F] font-semibold opacity-30">
            7850
          </p>
          <p className="absolute  mt-[294px] text-[#46433F] font-semibold opacity-30">
            0
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Credits")}
            </p>
          </div>
          <div className="flex items-center justify-center absolute  mt-[144px] rounded-xl shadow-md w-[69px] h-[48px] bg-white opacity-30">
            <p className=" text-[#979797]">0</p>
          </div>
          <div className="flex items-center justify-center absolute  mt-[294px] rounded-xl shadow-md w-[69px] h-[48px] bg-white opacity-30">
            <p className=" text-[#979797]">500</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Creidts Currency")}
            </p>
          </div>
          <p className="absolute  mt-[144px] text-[#46433F] font-semibold opacity-30">
            0
          </p>
          <p className="absolute  mt-[294px] text-[#46433F] font-semibold opacity-30">
            7850
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Description")}
            </p>
          </div>
          <input
            disabled
            type="text"
            className="bg-white opacity-30 rounded-lg outline-none w-32 h-[48px] absolute  mt-[144px] shadow-md"
          />
          <input
            disabled
            type="text"
            className="bg-white opacity-30 rounded-lg outline-none w-32 h-[48px] absolute  mt-[294px] shadow-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
            <p className="text-base font-normal  text-[#727272] ">
              {t("Cost Center")}
            </p>
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[144px] opacity-30">
            <input
              type="text"
              className="bg-white rounded-lg  outline-none w-[142px] h-[48px]"
              placeholder={t("IT Department")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 shadow-md rounded-xl absolute  mt-[294px] opacity-30">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none w-[142px] h-[48px]"
              placeholder={t("IT Department")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly px-[400px] py-5 rounded-3xl bg-[#1E2C5F] bg-opacity-20 mt-28">
        <p className="text-lg font-semibold text-[#46433F]">{t("TOTAL")}</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">500</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">7850</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">500</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">7850</p>
      </div>
      <div className="flex items-center gap-5 ml-10">
        <p className="text-[#00C227]  text-lg font-bold">DIFFERENCE</p>
        <Modal>
          <Modal.Open opens="reverse">
            <span className="flex items-center justify-center w-[196px] h-[53px] rounded-2xl bg-[#127CF5] text-[white]  text-lg font-medium cursor-pointer">
              {t("REVERSE")}
            </span>
          </Modal.Open>
          <Modal.Window name="reverse">
            <Reverse />
          </Modal.Window>
        </Modal>
        <button
          disabled
          className="w-[196px] h-[53px] rounded-2xl bg-[#E1044C] text-[white]  text-lg font-medium opacity-30"
        >
          {t("DELETE")}
        </button>
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#00C227] text-[white]  text-lg font-medium">
          {t("POST")}
        </button>
        <button
          disabled
          className="w-[196px] h-[53px] rounded-2xl bg-[#1E2C5F] text-[white]  text-lg font-medium opacity-30"
        >
          {t("SAVE")}
        </button>
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#46433F] text-[white]  text-lg font-medium">
          {t("CANCEL")}
        </button>
      </div>
      <div className="h-16=2"></div>
    </div>
  );
}

export default EditJournalEntryPosted;
