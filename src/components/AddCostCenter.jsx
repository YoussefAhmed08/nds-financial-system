import GoldPlus from "../assets/Group 396.svg";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import BoldToggleOn from "../assets/vuesax-bold-toggle-on-circle.svg";
import BoldToggleOff from "../assets/vuesax-bold-toggle-off-circle.svg";
import AddCircle from "../assets/vuesax-linear-add-circle.svg";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { useState } from "react";

function AddCostCenter() {
  const [isToggled1, setIsToggled1] = useState(true);
  const [isToggled2, setIsToggled2] = useState(false);

  function toggle1() {
    setIsToggled1(() => !isToggled1);
  }

  function toggle2() {
    setIsToggled2(() => !isToggled2);
  }

  return (
    <div className="w-[50vw] h-[70vh] rounded-xl bg-white flex flex-col gap-9 items-strart shadow-md pl-20 pt-8">
      <p className="text-2xl font-montserrat text-[#46433F] font-bold">
        Add New Account
      </p>
      <div className="flex gap-5">
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
            placeholder="Parent Cost Center"
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
            placeholder="Cost Center Status"
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
            placeholder="Cost Center Name AR"
          />
        </div>
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="Cost Center Name EN"
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
      </div>{" "}
      <p className="text-md font-montserrat text-[#46433F] -my-5 font-semibold">
        Related Accounts
      </p>
      <p className="text-md font-montserrat text-[#979797]">
        Select List Of Accounts
      </p>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
          <input
            type="text"
            className="bg-white rounded-lg  font-montserrat outline-none h-[65px]"
            placeholder="List Of Accounts"
          />
          <img
            src={ArrowCircle}
            alt="arr circle"
            className="w-[24px] h-[24px] rotate-90"
          />
        </div>{" "}
        <img
          src={GoldPlus}
          alt="arr circle"
          className="rotate-90 w-[31px] h-[31px]"
        />
      </div>{" "}
      <div className="flex gap-5">
        <div className="flex items-center justify-evenly bg-[#F5F5F5] w-[93px] h-[39px] rounded-lg pl-3">
          <p className="text-base font-montserrat text-[#46433F]">Cash</p>
          <img
            src={AddCircle}
            alt="add circle"
            className="w-[28px] h-[28px] cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-around bg-[#F5F5F5] w-[93px] h-[39px] rounded-lg pl-3">
          <p className="text-base font-montserrat text-[#46433F]">AR</p>
          <img
            src={AddCircle}
            alt="add circle"
            className="w-[28px] h-[28px] cursor-pointer"
          />
        </div>
      </div>{" "}
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[263px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold ml-[30%]"
      >
        ADD
      </Link>
    </div>
  );
}

export default AddCostCenter;
