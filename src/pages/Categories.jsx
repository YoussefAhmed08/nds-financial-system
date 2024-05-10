import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Modal from "../components/Modal";
import Add from "../assets/vuesax-linear-add.svg";
import CategoriesOverview from "../components/CategoriesOverview";
import AddCategory from "../components/AddCategory";
import { useTranslation } from "react-i18next";

function Categories() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5 px-10">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none h-[65px]"
            placeholder={t("Category Name EN")}
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
            placeholder={t("Category Name AR")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  outline-none h-[65px]"
            placeholder={t("Source")}
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[275px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
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
        <div className="flex gap-5">
          <button className="w-[90px] h-[65px] bg-[#0472EF] rounded-xl text-white text-lg">
            {t("Search")}
          </button>
          <button className="w-[90px] h-[65px] bg-[#E1044C] rounded-xl text-white text-lg">
            {t("Clear")}
          </button>
        </div>
        <Modal>
          <Modal.Open opens="addacc">
            <span className="cursor-pointer flex items-center gap-3 pl-7 w-[196px] h-[65px] bg-[#1E2C5F] rounded-xl text-white text-base">
              <img src={Add} alt="add" className="w-6 h-6" /> {t("Add Account")}
            </span>
          </Modal.Open>
          <Modal.Window name="addacc">
            <AddCategory />
          </Modal.Window>
        </Modal>
      </div>
      <div className="flex items-center justify-around py-5 m-10 rounded-3xl bg-[#F7F7F7]">
        <p className="text-lg text-[#727272]">{t("No")}</p>
        <p className="text-lg text-[#727272] -ml-5">{t("Category Name EN")}</p>
        <p className="text-lg text-[#727272] -ml-36">{t("Category Name AR")}</p>
        <p className="text-lg text-[#727272] -ml-12">{t("Source")}</p>
        <p className="text-lg text-[#727272]">{t("Creation Date")}</p>
        <p className="text-lg text-[#727272]">{t("Status")}</p>
        <p className="text-lg text-[#727272]">{t("Actions")}</p>
      </div>
      <div className="-mt-12">
        <CategoriesOverview num="1" />
        <CategoriesOverview num="2" />
      </div>
    </div>
  );
}

export default Categories;
