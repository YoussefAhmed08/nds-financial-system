import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Calender from "../assets/calendar-linear.svg";
import ClosingEntryOverview from "../components/ClosingEntryOverview";
import { useTranslation } from "react-i18next";

function ClosingEntry() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 px-12 justify-center">
      <div className="flex gap-5 items-center">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none w-[225px] h-[65px]"
            placeholder={t("Select Profit & Loss Account")}
          />
          <img
            src={ArrowCircle}
            alt="calender"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  outline-none"
            placeholder={t("Select Closing Date")}
          />
          <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
        </div>
        <button className="w-[111px] h-[65px] bg-[#1E2C5F] rounded-xl text-white text-base font-semibold">
          {t("APPLY")}
        </button>
      </div>
      <div className="flex items-center justify-around py-5 m-10 rounded-3xl bg-[#F7F7F7]">
        <p className="text-lg text-[#727272]">{t("Accounts")}</p>
        <p className="text-lg text-[#727272] -ml-20">{t("Debit")}</p>
        <p className="text-lg text-[#727272]">{t("Credit")}</p>
      </div>
      <div className="-mt-12">
        <ClosingEntryOverview />
      </div>
      <div className="flex items-center justify-around py-5 m-10 rounded-3xl bg-[#1E2C5F] bg-opacity-20">
        <p className="text-lg font-raleway font-semibold text-[#46433F]">
          {t("BALANCE")}
        </p>
        <p className="text-lg font-raleway font-semibold text-[#1E2C5F] mr-">
          5000
        </p>
        <p className="text-lg font-raleway font-semibold text-[#1E2C5F] ml-40">
          5000
        </p>
      </div>
      <button className="w-[196px] h-[65px] bg-[#00C227] rounded-xl text-white text-base ml-auto mr-10">
        {t("Submit")}
      </button>
    </div>
  );
}

export default ClosingEntry;
