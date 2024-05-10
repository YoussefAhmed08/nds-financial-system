import { RiSearch2Line } from "react-icons/ri";
import Add from "../assets/vuesax-linear-add.svg";
import Filter from "../assets/vuesax-linear-filter-edit.svg";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import ChartOfAccOverview from "../components/ChartOfAccOverview";
import AddChartOfAccountForm from "../components/AddChartOfAccountForm";
import Modal from "../components/Modal";
import { useTranslation } from "react-i18next";

function ChartOfAccount() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-around gap-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-around flex-grow gap-5 w-[84vw] h-[65px] bg-white shadow-md rounded-2xl">
            <RiSearch2Line className="opacity-25 w-[32px] h-[32px] pl-1" />
            <input
              type="text"
              placeholder={t("Search Account Name")}
              className="outline-none flex flex-grow text-[15px] h-[65px]"
            />
          </div>
          <Modal>
            <Modal.Open opens="addacc">
              <span className="cursor-pointer flex items-center gap-3 pl-10 w-[196px] h-[53px] bg-[#1E2C5F] rounded-xl text-white text-base">
                <img src={Add} alt="add" className="w-6 h-6" />{" "}
                {t("Add Account")}
              </span>
            </Modal.Open>
            <Modal.Window name="addacc">
              <AddChartOfAccountForm />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex items-center gap-3 justify-self-start -ml-[88vw]">
          <img src={Filter} alt="Filter" />
          <p className="text-lg text-[#46433F] font-raleway">
            {t("Filter Results")}
          </p>
        </div>
        <div className="flex gap-5 -ml-[0vw]">
          <div className="flex items-center justify-around gap-10">
            <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
              <input
                type="text"
                className="bg-white rounded-lg  outline-none h-[65px]"
                placeholder={t("Account Type")}
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
                placeholder={t("Level")}
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
                placeholder={t("Account Status")}
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
                placeholder={t("Parent Account")}
              />
              <img
                src={ArrowCircle}
                alt="arr circle"
                className="w-[24px] h-[24px] rotate-90"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <button className="w-[90px] h-[65px] bg-[#0472EF] rounded-xl text-white text-lg">
              {t("Search")}
            </button>
            <button className="w-[90px] h-[65px] bg-[#E1044C] rounded-xl text-white text-lg">
              {t("Clear")}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-around h-16 bg-[#F7F7F7] rounded-xl mt-10 mx-10 w-[95vw]">
          <p className="text-base font-normal text-[#727272]">{t("No")}</p>
          <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272]">
            {t("Account Code")}
          </p>
          <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272]">
            {t("Account Name AR")}
          </p>
          <p className="text-base font-normal text-[#727272]">
            {t("Account Name EN")}
          </p>
          <p className="text-base font-normal text-[#727272]">
            {t("Parent Account")}
          </p>
          <p className="text-base font-normal text-[#727272]">
            {t("Account Type")}
          </p>
          <p className="text-base font-normal text-[#727272]">
            {t("Account Nature")}
          </p>
          <p className="text-base font-normal text-[#727272]">{t("Status")}</p>
          <p className="text-base font-normal text-[#727272]">{t("Actions")}</p>
        </div>
        <ChartOfAccOverview num="1" />
        <ChartOfAccOverview num="2" />
        <ChartOfAccOverview num="3" />
        <ChartOfAccOverview num="4" />
        <ChartOfAccOverview num="5" />
      </div>
    </>
  );
}

export default ChartOfAccount;
