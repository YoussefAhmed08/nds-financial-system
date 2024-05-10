import React, { forwardRef } from "react";
import change from "../assets/noun-change-password-4287523@2x.png";
import logout from "../assets/noun-log-out-3327100.png";
import Modal from "./Modal";
import ChangePassForm from "./ChangePassForm";
import LogOut from "./LogOut";
import { useTranslation } from "react-i18next";

const DropDownSmall = forwardRef(({ isExpand }, ref) => {
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      className={`${
        isExpand ? "absolute top-full right-0" : "hidden"
      } w-[228px] h-[131px] overflow-hidden bg-white z-10 rounded-xl flex flex-col justify-around items-center shadow-lg`}
    >
      <Modal>
        <Modal.Open opens="changePasswordForm">
          <span className="flex items-center pl-5 w-[233px] h-[47px] rounded-2xl hover:bg-gray-100 gap-2 cursor-pointer">
            <img src={change} alt="change pass" className="w-[30px] h-[30px]" />
            <p className="text-lg text-[#46433F] pl-1">
              {t("Change Password")}
            </p>
          </span>
        </Modal.Open>
        <Modal.Window name="changePasswordForm">
          <ChangePassForm />
        </Modal.Window>

        <Modal.Open opens="logout">
          <span className="flex items-center pl-5 w-[233px] h-[47px] rounded-2xl hover:bg-gray-100 cursor-pointer">
            <img
              src={logout}
              alt="logout "
              className="w-[23px] h-[23px] ml-1"
            />
            <p className="text-[#E1044C] text-left text-lg pl-5">
              {t("Log Out")}
            </p>
          </span>
        </Modal.Open>
        <Modal.Window name="logout">
          <LogOut />
        </Modal.Window>
      </Modal>
    </div>
  );
});

export default DropDownSmall;
