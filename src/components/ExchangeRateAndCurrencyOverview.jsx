function ExchangeRateAndCurrencyOverview({ currency, torf, rate }) {
  return (
    <div className="flex gap-[425px] pl-[250px] mt-14">
      <p className="text-[#46433F] font-montserrat text-lg w-2">{currency}</p>
      <p className="text-[#46433F] font-montserrat text-lg w-16">{torf}</p>
      <p className="text-[#46433F] font-montserrat text-lg w-5">{rate}</p>
      <p className="text-[#46433F] font-montserrat text-lg">12-02-2022</p>
    </div>
  );
}

export default ExchangeRateAndCurrencyOverview;
