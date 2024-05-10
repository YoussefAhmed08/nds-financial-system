import Edit from "../assets/edit-2-bold.svg";

function ChartOfAccOverview({ num }) {
  return (
    <div className="flex items-center gap-[155px]">
      <p className="text-lg font-montserrat text-[#46433F]">{num}</p>
      <p className="text-lg font-montserrat text-[#46433F]">1022354</p>
      <p className="text-lg font-montserrat text-[#46433F]">الأصول المتداولة</p>
      <p className="text-lg font-montserrat text-[#46433F]">Current</p>
      <p className="text-lg font-montserrat text-[#46433F]">Assets</p>
      <p className="text-lg font-montserrat text-[#46433F]">Assets</p>
      <p className="text-lg font-montserrat text-[#46433F]">Debit</p>
      <p className="text-lg font-montserrat text-[#46433F]">Active</p>
      <img
        src={Edit}
        alt="edit"
        className="text-lg font-montserrat text-[#46433F] w-6 h-6"
      />
    </div>
  );
}

export default ChartOfAccOverview;
