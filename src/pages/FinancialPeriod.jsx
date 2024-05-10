import Filter from "../assets/vuesax-linear-filter-edit.svg";
import Calender from "../assets/calendar-linear.svg";
import Modal from "../components/Modal";
import Add from "../assets/vuesax-linear-add.svg";
import Edit from "../assets/edit-2-bold.svg";
import AddFinancialPeriod from "../components/AddFinancialPeriod";
import { useTranslation } from "react-i18next";

function FinancialPeriod() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-start justify-around gap-10 mx-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-around flex-grow gap-5 pl-5 w-[84vw] h-[65px] bg-white shadow-md rounded-2xl">
            <input
              type="text"
              placeholder={t("Search period name")}
              className="outline-none flex flex-grow text-[15px] h-[65px]"
            />
          </div>
          <Modal>
            <Modal.Open opens="addacc">
              <span className="cursor-pointer flex items-center gap-2 pl-5 w-[196px] h-[53px] bg-[#1E2C5F] rounded-xl text-white text-base">
                <img src={Add} alt="add" className="w-6 h-6" />
                {t("Add Fin. Peroid")}
              </span>
            </Modal.Open>
            <Modal.Window name="addacc">
              <AddFinancialPeriod />
            </Modal.Window>
          </Modal>
        </div>
        <div className="flex items-center gap-3 justify-self-start">
          <img src={Filter} alt="Filter" />
          <p className="text-lg text-[#46433F]">{t("Filter Results")}</p>
        </div>
        <div className="flex items-start gap-5 -mt-5 justify-start">
          <div className="flex items-center justify-around gap-10">
            <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
              <input
                disabled
                type="text"
                className="bg-white rounded-lg  outline-none"
                placeholder={t("Date From")}
              />
              <img
                src={Calender}
                alt="arr circle"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
              <input
                disabled
                type="text"
                className="bg-white rounded-lg  outline-none"
                placeholder={t("Date To")}
              />
              <img
                src={Calender}
                alt="arr circle"
                className="w-[24px] h-[24px]"
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
        <div className="flex gap-36 justify-center h-16 rounded-xl w-[95vw]">
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tl-xl rounded-bl-xl">
              <p className="text-base font-normal text-[#727272] ">{t("No")}</p>
            </div>
            <p className="absolute mt-[144px]">1</p>
            <p className="absolute mt-[294px]">2</p>
            <p className="absolute mt-[444px]">3</p>
            <p className="absolute mt-[594px]">4</p>
            <p className="absolute mt-[754px]">5</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Period Name")}
              </p>
            </div>
            <p className="absolute mt-[144px]">Jan 2022</p>
            <p className="absolute mt-[294px]">Jan 2022</p>
            <p className="absolute mt-[444px]">Jan 2022</p>
            <p className="absolute mt-[594px]">Jan 2022</p>
            <p className="absolute mt-[754px]">Jan 2022</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Date From")}
              </p>
            </div>
            <p className="absolute mt-[144px]">01-01-2022</p>
            <p className="absolute mt-[294px]">01-01-2022</p>
            <p className="absolute mt-[444px]">01-01-2022</p>
            <p className="absolute mt-[594px]">01-01-2022</p>
            <p className="absolute mt-[754px]">01-01-2022</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Date To")}
              </p>
            </div>
            <p className="absolute mt-[144px]">01-01-2022</p>
            <p className="absolute mt-[294px]">01-01-2022</p>
            <p className="absolute mt-[444px]">01-01-2022</p>
            <p className="absolute mt-[594px]">01-01-2022</p>
            <p className="absolute mt-[754px]">01-01-2022</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Status")}
              </p>
            </div>
            <div
              className={`flex items-center justify-center absolute mt-[144px] w-[90px] h-[45px] rounded-2xl bg-[#00C227]`}
            >
              <p className={`text-base text-white`}>{t("Open")}</p>
            </div>
            <div
              className={`flex items-center justify-center absolute mt-[294px] w-[90px] h-[45px] rounded-2xl bg-[#00C227] bg-opacity-20`}
            >
              <p className={`text-base text-[#00C227]`}>{t("Close")}</p>
            </div>
            <div
              className={`flex items-center justify-center absolute mt-[444px] w-[90px] h-[45px] rounded-2xl bg-[#00C227]`}
            >
              <p className={`text-base text-white`}>{t("Open")}</p>
            </div>
            <div
              className={`flex items-center justify-center absolute mt-[594px] w-[90px] h-[45px] rounded-2xl bg-[#00C227] bg-opacity-20`}
            >
              <p className={`text-base text-[#00C227]`}>{t("Close")}</p>
            </div>
            <div
              className={`flex items-center justify-center absolute mt-[754px] w-[90px] h-[45px] rounded-2xl bg-[#00C227]`}
            >
              <p className={`text-base text-white`}>{t("Open")}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Last Closing Date")}
              </p>
            </div>
            <p className="absolute mt-[144px]">15-02-2022</p>
            <p className="absolute mt-[294px]">15-02-2022</p>
            <p className="absolute mt-[444px]">15-02-2022</p>
            <p className="absolute mt-[594px]">15-02-2022</p>
            <p className="absolute mt-[754px]">15-02-2022</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Closed By")}
              </p>
            </div>
            <p className="absolute mt-[144px]">Youssef</p>
            <p className="absolute mt-[294px]">Ahmed</p>
            <p className="absolute mt-[444px]">Mohamed</p>
            <p className="absolute mt-[594px]">jhon</p>
            <p className="absolute mt-[754px]">josef</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
              <p className="text-base font-normal text-[#727272] ">
                {t("Update Date")}
              </p>
            </div>
            <p className="absolute mt-[144px]">17-02-2022</p>
            <p className="absolute mt-[294px]">17-02-2022</p>
            <p className="absolute mt-[444px]">17-02-2022</p>
            <p className="absolute mt-[594px]">17-02-2022</p>
            <p className="absolute mt-[754px]">17-02-2022</p>
          </div>
          <div className="flex flex-col items-center justify-center w-16 h-[100%]">
            <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
              <p className="text-base font-normal text-[#727272] ">
                {t("Actions")}
              </p>
            </div>
            <img src={Edit} alt="edit" className="absolute mt-[144px]" />
            <img src={Edit} alt="edit" className="absolute mt-[294px]" />
            <img src={Edit} alt="edit" className="absolute mt-[444px]" />
            <img src={Edit} alt="edit" className="absolute mt-[594px]" />
            <img src={Edit} alt="edit" className="absolute mt-[754px]" />
          </div>
        </div>
        {/* <div className="flex flex-col gap-10 mx-10 ml-16 items-center justify-center">
          <FinancialPeriodOverview
            num="1"
            p="Open"
            letterColor="white"
            opacity="100"
            name="Youssef"
          />
          <FinancialPeriodOverview
            num="2"
            p="Close"
            letterColor="#00C227"
            opacity="20"
            name="Ali"
          />
          <FinancialPeriodOverview
            num="3"
            p="Open"
            letterColor="white"
            name="Ibrahim"
          />
          <FinancialPeriodOverview
            num="4"
            p="Close"
            letterColor="#00C227"
            opacity="20"
            name="Ahmed"
          />
          <FinancialPeriodOverview
            num="5"
            p="Open"
            letterColor="white"
            name="Mohamed"
          />
        </div> */}
      </div>
    </>
  );
}

export default FinancialPeriod;
