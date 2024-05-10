import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import BoldToggleOn from "../assets/vuesax-bold-toggle-on-circle.svg";
import BoldToggleOff from "../assets/vuesax-bold-toggle-off-circle.svg";
import Calender from "../assets/calendar-linear.svg";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useState } from "react";

function AddChartOfAccountForm() {
  const [isToggled1, setIsToggled1] = useState(true);
  const [isToggled2, setIsToggled2] = useState(false);

  function toggle1() {
    setIsToggled1(() => !isToggled1);
  }

  function toggle2() {
    setIsToggled2(() => !isToggled2);
  }

  return (
    <div className="w-[60vw] h-[70vh] rounded-xl bg-white flex flex-col gap-9 items-center py-12 shadow-md">
      <p className="text-2xl font-montserrat text-[#46433F] font-bold -ml-[590px]">
        Add New Account
      </p>
      <div className="flex gap-5">
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Account Type"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Level"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Parent Account"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
      </div>{" "}
      <p className="text-md font-montserrat text-[#979797] -ml-[690px] -m-3">
        Account Nature
      </p>
      <div className="flex gap-5">
        <div className="flex items-center justify-between bg-transparent w-[280px] h-[65px] pr-6 pl-8 rounded-xl -ml-5">
          <p className="text-[#44413D] font-montserrat">Debit</p>{" "}
        </div>{" "}
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Level"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Parent Account"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>
      </div>{" "}
      <div className="flex gap-5">
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Account Name EN"
          />
        </div>
        <div className="flex flex-col items-center bg-transparent w-[260px] h-[65px] pr-6 pl-8 rounded-xl">
          <p className="text-[#46433F] font-montserrat text-lg -ml-32">
            Is it last level ?
          </p>
          <img
            src={isToggled1 ? BoldToggleOn : BoldToggleOff}
            alt="toggle on"
            className="cursor-pointer -ml-56 mt-4"
            onClick={toggle1}
          />
        </div>{" "}
        <div className="flex flex-col items-center bg-transparent w-[260px] h-[65px] pr-6 pl-8 rounded-xl">
          <p className="text-[#46433F] font-montserrat text-lg -ml-32">
            Is cost center mandotary ?
          </p>
          <img
            src={isToggled2 ? BoldToggleOn : BoldToggleOff}
            alt="toggle on"
            className="cursor-pointer -ml-56 mt-4"
            onClick={toggle2}
          />
        </div>{" "}
      </div>{" "}
      <div className="flex gap-5">
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Opining Balance"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Opining Balance Nature"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>{" "}
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            disabled
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Opining Balance Date"
          />
          <img src={Calender} alt="Calender" className="w-[24px] h-[24px]" />
        </div>{" "}
      </div>{" "}
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[263px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold"
      >
        ADD
      </Link>
    </div>
  );
}

export default AddChartOfAccountForm;
