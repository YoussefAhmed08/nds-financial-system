import Edit from "../assets/edit-2-bold.svg";

function CostCenterOverview({ num }) {
  return (
    <div className="flex items-center gap-[155px]">
      <p className="text-lg text-montserrat text-[#46433F]">{num}</p>
      <p className="text-lg text-montserrat text-[#46433F]">1022354</p>
      <p className="text-lg text-montserrat text-[#46433F]">
        قسم التكنولجيا والمعلومات
      </p>
      <p className="text-lg text-montserrat text-[#46433F]">IT Department</p>
      <p className="text-lg text-montserrat text-[#46433F]">Assets</p>
      <p className="text-lg text-montserrat text-[#46433F]">Cash / AR</p>
      <p className="text-lg text-montserrat text-[#46433F]">Active</p>
      <img src={Edit} alt="edit" className="w-6 h-6" />
    </div>
  );
}

export default CostCenterOverview;
