import Edit from "../assets/edit-2-bold.svg";

function FinancialPeriodOverview({ num, opacity, p, letterColor, name }) {
  return (
    <div className="flex items-center gap-[140px]">
      <p className="text-base font-montserrat text-[#46433F]">{num}</p>
      <p className="text-base font-montserrat text-[#46433F] w-[67px]">
        Jan 2022
      </p>
      <p className="text-base font-montserrat text-[#46433F] w-[78px]">
        01-01-2022
      </p>
      <p className="text-base font-montserrat text-[#46433F] w-[81px]">
        01-02-2022
      </p>
      <div
        className={`flex items-center justify-center w-[90px] h-[45px] rounded-2xl bg-[#00C227] bg-opacity-${opacity}`}
      >
        <p className={`text-base font-montserrat text-[${letterColor}]`}>{p}</p>
      </div>
      <p className="text-base font-montserrat text-[#46433F] w-[80px]">
        15-02-2022
      </p>
      <p className="text-base font-montserrat text-[#46433F] w-[80px]">
        {name}
      </p>
      <p className="text-base font-montserrat text-[#46433F]">17-02-2022</p>
      <img src={Edit} alt="edit" className="w-6 h-6" />
    </div>
  );
}

export default FinancialPeriodOverview;
