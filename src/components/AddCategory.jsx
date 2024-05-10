import { Link } from "react-router-dom";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import { useMoveBack } from "../hooks/useMoveBack";
import { useTranslation } from "react-i18next";

function AddCategory() {
  const { t } = useTranslation();

  return (
    <div className="w-[25vw] h-[60vh] bg-white rounded-2xl flex flex-col gap-3 items-center justify-center">
      <p className="text-2xl font-bol text-[#46433F] -ml-52">
        {t("Add Category")}
      </p>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
        <input
          type="text"
          className="bg-white rounded-lg outline-none h-[65px]"
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
          className="bg-white rounded-lg outline-none h-[65px]"
          placeholder={t("Category Name AR")}
        />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
        <input
          type="text"
          className="bg-white rounded-lg outline-none h-[65px]"
          placeholder={t("Source")}
        />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
        <input
          type="text"
          className="bg-white rounded-lg outline-none h-[65px]"
          placeholder={t("Status")}
        />
        <img
          src={ArrowCircle}
          alt="arr circle"
          className="w-[24px] h-[24px] rotate-90"
        />
      </div>
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[263px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold mt-10"
      >
        {t("Add")}
      </Link>
    </div>
  );
}

export default AddCategory;
