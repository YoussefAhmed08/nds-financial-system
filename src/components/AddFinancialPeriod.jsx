import Calender from "../assets/calendar-linear.svg";
import ToggleOn from "../assets/vuesax-bold-toggle-on-circle.svg";
import ToggleOff from "../assets/vuesax-bold-toggle-off-circle.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";

function AddFinancialPeriod() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="w-[25vw] h-[60vh] bg-white rounded-2xl flex flex-col">
      <p className="text-2xl font-montserrat text-[#46433F] font-bold ml-16 mt-12">
        Add Financial Period
      </p>
      <input
        type="text"
        className="bg-white rounded-lg  font-montserrat outline-none w-[375px] h-[65px] pr-6 pl-8 shadow-md ml-16 mt-12"
        placeholder="Period Name"
      />
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl ml-16 mt-3">
        <input
          disabled
          type="text"
          className="bg-white rounded-lg  font-montserrat outline-none"
          placeholder="Date From"
        />
        <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
      </div>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl ml-16 mt-3">
        <input
          disabled
          type="text"
          className="bg-white rounded-lg  font-montserrat outline-none"
          placeholder="Date From"
        />
        <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
      </div>
      <p className="text-base font-montserrat ml-16 mt-5">Tigger Clossing</p>
      <img
        onClick={() => setToggle(!toggle)}
        src={toggle ? ToggleOn : ToggleOff}
        alt="Toggle"
        className="w-[35px] h-[24px] cursor-pointer ml-16 mt-2"
      />
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[263px] h-[53px] bg-[#1E2C5F] rounded-lg text-white text-lg font-semibold ml-[25%] mt-8"
      >
        ADD
      </Link>
    </div>
  );
}

export default AddFinancialPeriod;
