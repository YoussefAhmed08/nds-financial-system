import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import GoldPlus from "../assets/Group 396.svg";
import AddCircle from "../assets/vuesax-linear-add-circle.svg";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";

function SetNewExchangeRatesAndCurrencies() {
  return (
    <div className="w-[40vw] h-[80vh] bg-white rounded-2xl">
      <p className="text-2xl font-montserrat font-bold pt-20 pl-20">
        Set New Exchange Rates & Currencies
      </p>
      <div className="flex items-center justify-between bg-white w-[575px] h-[65px] pr-6 pl-8 ml-20 mt-10 shadow-md rounded-xl">
        <p className="w-44 text-sm -mt-10 text-[#979797]">Currency From</p>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg font-montserrat outline-none w-[375px] -ml-[300px] placeholder-[#46433F]"
          placeholder="EGP"
        />
        <img
          src={ArrowCircle}
          alt="arr circle"
          className="w-[24px] h-[24px] rotate-90"
        />
      </div>
      <div className="flex gap-5 ml-20 mt-10">
        <div className="flex flex-col gap-2">
          <p className="text-[#979797] text-base font-montserrat">
            Default Currency To :
          </p>
          <p className="text-[#46433F] text-base font-montserrat">EGY</p>
        </div>
        <input
          disabled
          type="text"
          className="bg-white rounded-lg font-montserrat outline-none w-[275px] h-[65px] ml-28 shadow-md pl-10"
          placeholder="Exchange Rate"
        />
        <img src={GoldPlus} alt="gold plus" />
      </div>
      <div className="w-[30vw] h-[7vh] bg-[#F7F7F7] flex gap-28 rounded-xl ml-20 mt-12 items-center justify-center">
        <p className="text-[#888888] font-montserrat text-base">Currency</p>
        <p className="text-[#888888] font-montserrat text-base">
          Exchange Rate
        </p>
        <p className="text-[#888888] font-montserrat text-base">Remove</p>
      </div>
      <div className="flex gap-48 mt-5 ml-36">
        <p className="text-[#46433F] font-montserrat text-lg">EGP</p>
        <p className="text-[#46433F] font-montserrat text-lg">1</p>
        <img
          src={AddCircle}
          alt="cancel"
          className="w-[34px] h-[34px] cursor-pointer"
        />
      </div>
      <div className="flex gap-[168px] mt-5 ml-36">
        <p className="text-[#46433F] font-montserrat text-lg">USD</p>
        <p className="text-[#46433F] font-montserrat text-lg">17.509</p>
        <img
          src={AddCircle}
          alt="cancel"
          className="w-[34px] h-[34px] cursor-pointer"
        />
      </div>
      <Link
        onClick={useMoveBack}
        className="flex items-center justify-center w-[20vw] bg-[#1E2C5F] text-white h-[65px] rounded-xl text-lg font-semibold mt-20 ml-[10vw]"
      >
        SET
      </Link>
    </div>
  );
}

export default SetNewExchangeRatesAndCurrencies;
