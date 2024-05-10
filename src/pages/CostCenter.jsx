import Filter from "../assets/vuesax-linear-filter-edit.svg";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Modal from "../components/Modal";
import Add from "../assets/vuesax-linear-add.svg";
import CostCenterOverview from "../components/CostCenterOverview";
import AddCostCenter from "../components/AddCostCenter";
import { useTranslation } from "react-i18next";

function CostCenter() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-start justify-around gap-10 mx-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-around flex-grow gap-5 pl-5 w-[84vw] h-[65px] bg-white shadow-md rounded-2xl">
            <input
              type="text"
              placeholder={t("Search Account Name")}
              className="outline-none flex flex-grow text-[15px] h-[65px]"
            />
          </div>
          <Modal>
            <Modal.Open opens="addacc">
              <span className="cursor-pointer flex items-center gap-5 pl-5 w-[196px] h-[53px] bg-[#1E2C5F] rounded-xl text-white text-base">
                <img src={Add} alt="add" className="w-6 h-6" />{" "}
                {t("Add Account")}
              </span>
            </Modal.Open>
            <Modal.Window name="addacc">
              <AddCostCenter />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex items-center gap-3 justify-self-start">
          <img src={Filter} alt="Filter" />
          <p className="text-lg text-[#46433F] font-raleway">
            {t("Filter Results")}
          </p>
        </div>
        <div className="flex items-start gap-5 -mt-5 justify-start">
          <div className="flex items-center justify-around gap-10">
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
                placeholder={t("Cost Center Status")}
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
                placeholder={t("Parent Cost Center")}
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
        <div className="flex items-center justify-around h-16 bg-[#F7F7F7] rounded-xl w-[95vw]">
          <p className="text-base font-normal text-[#727272]">{t("No")}</p>
          <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272]">
            {t("Cost Center Code")}
          </p>
          <p className="flex flex-col items-center justify-center text-base font-normal text-[#727272] -ml-16">
            {t("Cost Center Name AR")}
          </p>
          <p className="text-base font-normal text-[#727272] -ml-">
            {t("Cost Center Name EN")}
          </p>
          <p className="text-base font-normal text-[#727272] -ml-10">
            {t("Parent Cost Center")}
          </p>
          <p className="text-base font-normal text-[#727272] -ml-16">
            {t("List Of Accounts")}
          </p>
          <p className="text-base font-normal text-[#727272]">{t("Status")}</p>
          <p className="text-base font-normal text-[#727272]">{t("Actions")}</p>
        </div>
        <div className="flex flex-col gap-10 mx-10 ml-16 items-center justify-center">
          <CostCenterOverview num="1" />
          <CostCenterOverview num="2" />
          <CostCenterOverview num="3" />
          <CostCenterOverview num="4" />
          <CostCenterOverview num="5" />
        </div>
      </div>
    </>
  );
}

export default CostCenter;
