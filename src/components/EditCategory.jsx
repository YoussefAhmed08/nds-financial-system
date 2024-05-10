import { Link } from "react-router-dom";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import { useMoveBack } from "../hooks/useMoveBack";
import { useTranslation } from "react-i18next";

function EditCategory() {
  const { t } = useTranslation();

  return (
    <div className="w-[25vw] h-[60vh] bg-white rounded-2xl flex flex-col gap-5 items-center justify-center">
      <p className="text-2xl font-bold text-[#46433F] -ml-52">
        {t("Edit Category")}
      </p>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 mt-5 shadow-md rounded-xl">
        <p className="w-44 text-sm -mt-10 text-[#979797]">{t("Source")}</p>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg outline-none w-[375px] -ml-[140px] mt-3 placeholder-[#46433F]"
          placeholder="GL"
        />
        <img
          src={ArrowCircle}
          alt="arr circle"
          className="w-[24px] h-[24px] rotate-90"
        />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
        <p className="w-44 text-sm -mt-10 text-[#979797]">
          {t("Category Name EN")}
        </p>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg outline-none w-[375px] -ml-[140px] mt-3 placeholder-[#46433F]"
          placeholder="Invoice"
        />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8  shadow-md rounded-xl">
        <p className="w-44 text-sm -mt-10 text-[#979797]">
          {t("Category Name AR")}
        </p>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg outline-none w-[375px] -ml-[140px] mt-3 placeholder-[#46433F]"
          placeholder="فاتورة"
        />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
        <p className="w-44 text-sm -mt-10 text-[#979797]">{t("Status")}</p>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg outline-none w-[375px] -ml-[140px] mt-3 placeholder-[#46433F]"
          placeholder="Active"
        />
        <img
          src={ArrowCircle}
          alt="arr circle"
          className="w-[24px] h-[24px] rotate-90"
        />
      </div>
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[263px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold mt-5"
      >
        {t("SAVE")}
      </Link>
    </div>
  );
}

export default EditCategory;
