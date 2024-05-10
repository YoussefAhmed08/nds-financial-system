function ClosingEntryOverview() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-[500px] mt-14">
        <p className="text-[#46433F] font-montserrat text-lg w-[40px]">
          Revenues
        </p>
        <div className="flex items-center gap-[590px]">
          <p className="text-[#46433F] font-montserrat text-lg w-16">5000</p>
          <div className="text-[#46433F] font-montserrat text-lg w-[40px] border-b-[3px] border-[#C2C2C2]"></div>
        </div>
      </div>
      <div className="flex gap-[450px] mt-14">
        <p className="text-[#46433F] font-montserrat text-lg w-[100px]">
          Expenses
        </p>
        <div className="flex items-center gap-[610px]">
          <div className="text-[#46433F] font-montserrat text-lg w-[40px] border-b-[3px] border-[#C2C2C2]"></div>
          <p className="text-[#46433F] font-montserrat text-lg">3000</p>
        </div>
      </div>
      <div className="flex gap-[380px] mt-14">
        <p className="text-[#46433F] font-montserrat text-lg">
          Returned Earnings
        </p>
        <div className="flex items-center gap-[620px]">
          <div className="text-[#46433F] font-montserrat text-lg w-[40px] border-b-[3px] border-[#C2C2C2]"></div>
          <p className="text-[#46433F] font-montserrat text-lg w-10">2000</p>
        </div>
      </div>
    </div>
  );
}

export default ClosingEntryOverview;
