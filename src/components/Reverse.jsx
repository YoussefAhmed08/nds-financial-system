import Calender from "../assets/calendar-linear.svg";
import { useMoveBack } from "../hooks/useMoveBack";

function Reverse() {
  const moveBack = useMoveBack();

  return (
    <div className="w-[25vw] h-[35vh] rounded-2xl bg-white flex flex-col gap-5">
      <p className="text-2xl font-montserrat font-bold text-[#46433F] mt-12 ml-12">
        Reverse
      </p>
      <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-5 mt-5 shadow-md rounded-xl ml-12">
        <input
          disabled
          type="text"
          className="bg-white rounded-lg font-montserrat outline-none w-[275px] mt-3 placeholder-[#46433F]"
          placeholder="30-03-2024"
        />
        <p className="w-44 text-sm -mt-10 -ml-[21vw] text-[#979797]">
          Journal Date
        </p>
        <img src={Calender} alt="arr circle" className="w-[24px] h-[24px]" />
      </div>
      <button
        onClick={moveBack}
        className="w-[20vw] h-[53px] rounded-2xl bg-[#1E2C5F] text-[white] font-montserrat text-lg font-medium ml-10 mt-3"
      >
        CONFIRM
      </button>
    </div>
  );
}

export default Reverse;
