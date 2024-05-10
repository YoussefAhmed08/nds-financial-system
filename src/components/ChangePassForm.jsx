import Change from "../assets/noun-change-password-4287523.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { ModalContext } from "./Modal";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useTranslation } from "react-i18next";

function ChangePassForm() {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  const { t } = useTranslation();

  function ToggleVisible1() {
    setIsVisible1(() => !isVisible1);
  }

  function ToggleVisible2() {
    setIsVisible2(() => !isVisible2);
  }

  return (
    <div className="relative w-[471px] h-[468px] flex flex-col items-center justify-center bg-white bg-no-repeat bg-cover shadow-md rounded-lg gap-10">
      <div className="absolute top-5 left-10">
        <div className="flex gap-5 items-center">
          <img src={Change} alt="" className="w-[24px] h-[24px]" />
          <p className="text-left font-semibold text-2xl text-gray-700">
            {t("Change Password")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <input
          type="text"
          placeholder={t("User Name")}
          className="bg-white bg-no-repeat bg-cover shadow-md rounded-lg w-[317px] h-[65px] outline-none pl-5"
        />
        <div className="flex items-center justify-between pr-6 pl-6 w-[317px] h-[65px] shadow-md rounded-lg">
          <input
            type={isVisible1 ? "password" : "text"}
            placeholder={t("Current Password")}
            className="outline-none w-[453px] h-[55px]"
          />
          <button onClick={ToggleVisible1} className="cursor-pointer">
            {isVisible1 ? (
              <FaEye className="w-[28px] h-[19px] opacity-30" />
            ) : (
              <FaEyeSlash className="w-[28px] h-[19px] opacity-30" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-between pr-6 pl-6 w-[317px] h-[65px] shadow-md rounded-lg">
          <input
            type={isVisible2 ? "password" : "text"}
            placeholder={t("New Password")}
            className="outline-none w-[453px] h-[55px]"
          />
          <button onClick={ToggleVisible2} className="cursor-pointer">
            {isVisible2 ? (
              <FaEye className="w-[28px] h-[19px] opacity-30" />
            ) : (
              <FaEyeSlash className="w-[28px] h-[19px] opacity-30" />
            )}
          </button>
        </div>
      </div>
      <Link
        onClick={useMoveBack}
        className="w-[317px] h-[53px] bg-[#1E2C5F] rounded-[15px] flex items-center justify-center text-white  font-semibold"
      >
        {t("SAVE")}
      </Link>
    </div>
  );
}

export default ChangePassForm;
