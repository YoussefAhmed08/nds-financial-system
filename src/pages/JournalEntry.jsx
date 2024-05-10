import { RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Filter from "../assets/vuesax-linear-filter-edit.svg";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Calender from "../assets/calendar-linear.svg";
import Add from "../assets/vuesax-linear-add.svg";
import Edit from "../assets/edit-2-bold.svg";
import Eye from "../assets/noun-eye-3568808.svg";
import { useTranslation } from "react-i18next";

function JournalEntry() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 px-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 justify-self-start">
          <img src={Filter} alt="Filter" />
          <p className="text-lg text-[#46433F] font-raleway">
            {t("Filter Results")}
          </p>
        </div>
        <Link
          to="/journalentry/addjournalentry"
          className="flex items-center pl-3 gap-2 w-[212px] h-[53px] bg-[#1E2C5F] rounded-xl text-white text-base"
        >
          <img src={Add} alt="add" className="w-6 h-6" />{" "}
          {t("Add Journal Entry")}
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <RiSearch2Line className="opacity-25 w-[32px] h-[32px] pl-1" />
          <input
            type="text"
            className="bg-white rounded-lg outline-none h-[65px]"
            placeholder={t("Journal Name/No")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <RiSearch2Line className="opacity-25 w-[32px] h-[32px] pl-1" />
          <input
            type="text"
            className="bg-white rounded-lg outline-none h-[65px]"
            placeholder={t("Source")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <RiSearch2Line className="opacity-25 w-[32px] h-[32px] pl-1" />
          <input
            type="text"
            className="bg-white rounded-lg outline-none h-[65px]"
            placeholder={t("Category")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none h-[65px]"
            placeholder={t("Status")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Journal Date From")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Journal Date To")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Creation Date From")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Creation Date To")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <div className="flex gap-5 ml-auto">
          <button className="w-[90px] h-[65px] bg-[#0472EF] rounded-xl text-white text-lg">
            {t("Search")}
          </button>
          <button className="w-[90px] h-[65px] bg-[#E1044C] rounded-xl text-white text-lg">
            {t("Clear")}
          </button>
        </div>
      </div>
      <div className="flex gap-36 justify-center h-[16vh] rounded-xl w-[50vw] ml-[415px]">
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tl-xl rounded-bl-xl">
            <p className="text-base font-normal text-[#727272] ">No</p>
          </div>
          <p className="absolute mt-[144px]">1</p>
          <p className="absolute mt-[294px]">2</p>
          <p className="absolute mt-[444px]">3</p>
          <p className="absolute mt-[594px]">4</p>
          <p className="absolute mt-[754px]">5</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Journal Name")}
            </p>
          </div>
          <p className="absolute mt-[144px]">Noqood</p>
          <p className="absolute mt-[294px]">Noqood</p>
          <p className="absolute mt-[444px]">Noqood</p>
          <p className="absolute mt-[594px]">Noqood</p>
          <p className="absolute mt-[754px]">Noqood</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Creation Date")}
            </p>
          </div>
          <p className="absolute mt-[144px]">01-01-2022</p>
          <p className="absolute mt-[294px]">01-01-2022</p>
          <p className="absolute mt-[444px]">01-01-2022</p>
          <p className="absolute mt-[594px]">01-01-2022</p>
          <p className="absolute mt-[754px]">01-01-2022</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Journal Status")}
            </p>
          </div>
          <p className="absolute mt-[144px]">Posted</p>
          <p className="absolute mt-[294px]">UnPosted</p>
          <p className="absolute mt-[444px]">Posted</p>
          <p className="absolute mt-[594px]">UnPosted</p>
          <p className="absolute mt-[754px]">Posted</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Journal Date")}
            </p>
          </div>
          <p className="absolute mt-[144px]">01-01-2022</p>
          <p className="absolute mt-[294px]">01-01-2022</p>
          <p className="absolute mt-[444px]">01-01-2022</p>
          <p className="absolute mt-[594px]">01-01-2022</p>
          <p className="absolute mt-[754px]">01-01-2022</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Source")}
            </p>
          </div>
          <p className="absolute mt-[144px]">GL-account</p>
          <p className="absolute mt-[294px]">GL-account</p>
          <p className="absolute mt-[444px]">GL-account</p>
          <p className="absolute mt-[594px]">GL-account</p>
          <p className="absolute mt-[754px]">GL-account</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Category")}
            </p>
          </div>
          <p className="absolute mt-[144px]">Payment</p>
          <p className="absolute mt-[294px]">Payment</p>
          <p className="absolute mt-[444px]">Payment</p>
          <p className="absolute mt-[594px]">Payment</p>
          <p className="absolute mt-[754px]">Payment</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Toral Debits")}
            </p>
          </div>
          <p className="absolute mt-[144px]">4360</p>
          <p className="absolute mt-[294px]">4360</p>
          <p className="absolute mt-[444px]">4360</p>
          <p className="absolute mt-[594px]">4360</p>
          <p className="absolute mt-[754px]">4360</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal text-[#727272] ">
              {t("Total Credits")}
            </p>
          </div>
          <p className="absolute mt-[144px]">4360</p>
          <p className="absolute mt-[294px]">4360</p>
          <p className="absolute mt-[444px]">4360</p>
          <p className="absolute mt-[594px]">4360</p>
          <p className="absolute mt-[754px]">4360</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
            <p className="text-base font-normal text-[#727272] ">
              {t("Actions")}
            </p>
          </div>
          <Link
            to="/journalentry/editjournalentryposted"
            className="absolute ml-10 mt-[144px]"
          >
            <img src={Edit} alt="edit" />
          </Link>
          <Link
            to="/journalentry/journaldetails"
            className="absolute mr-10 mt-[144px]"
          >
            <img src={Eye} alt="eye" />
          </Link>
          <Link
            to="/journalentry/editjournalentryunposted"
            className="absolute ml-10 mt-[294px]"
          >
            <img src={Edit} alt="edit" />
          </Link>
          <Link
            to="/journalentry/journaldetails"
            className="absolute mr-10 mt-[294px]"
          >
            <img src={Eye} alt="eye" />
          </Link>
          <img src={Edit} alt="edit" className="absolute ml-10 mt-[444px]" />
          <img src={Eye} alt="eye" className="absolute mr-10 mt-[444px]" />
          <img src={Edit} alt="edit" className="absolute ml-10 mt-[594px]" />
          <img src={Eye} alt="eye" className="absolute mr-10 mt-[594px]" />
          <img src={Edit} alt="edit" className="absolute ml-10 mt-[754px]" />
          <img src={Eye} alt="eye" className="absolute mr-10 mt-[754px]" />
        </div>
      </div>
    </div>
  );
}

export default JournalEntry;
