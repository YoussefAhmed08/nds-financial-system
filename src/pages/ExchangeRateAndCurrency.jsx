import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import ExchangeRateAndCurrencyOverview from "../components/ExchangeRateAndCurrencyOverview";
import Modal from "../components/Modal";
import SetNewExchangeRatesAndCurrencies from "../components/SetNewExchangeRatesAndCurrencies";
import { useTranslation } from "react-i18next";

function ExchangeRateAndCurrency() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-12">
        <div className="flex gap-5">
          <div className="flex items-center justify-between bg-white w-[375px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              type="text"
              className="bg-white rounded-lg  outline-none h-[65px] w-[375px]"
              placeholder={t("Account Type")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex gap-5">
            <button className="w-[90px] h-[65px] bg-[#0472EF] rounded-xl text-white text-lg">
              {t("Search")}
            </button>
            <button className="w-[90px] h-[65px] bg-[#E1044C] rounded-xl text-white text-lg">
              {t("Clear")}
            </button>
          </div>
        </div>
        <Modal>
          <Modal.Open opens="addacc">
            <p className="cursor-pointer flex items-center gap-5 pl-16 w-[363px] h-[65px] bg-[#1E2C5F] rounded-xl text-white text-base">
              {t("Set new exchange rates & currencies")}
            </p>
          </Modal.Open>
          <Modal.Window name="addacc">
            <SetNewExchangeRatesAndCurrencies />
          </Modal.Window>
        </Modal>
      </div>
      <div className="flex items-center justify-around py-5 m-10 rounded-3xl bg-[#F7F7F7]">
        <p className="text-lg text-[#727272]">{t("Currency")}</p>
        <p className="text-lg text-[#727272]">{t("True & False")}</p>
        <p className="text-lg text-[#727272]">{t("Exchange Rate")}</p>
        <p className="text-lg text-[#727272]">{t("Add Date")}</p>
      </div>
      <div className="-mt-12">
        <ExchangeRateAndCurrencyOverview currency="EGP" torf="True" rate="1" />
        <ExchangeRateAndCurrencyOverview
          currency="USD"
          torf="False"
          rate="18"
        />
        <ExchangeRateAndCurrencyOverview currency="AED" torf="True" rate="5" />
        <ExchangeRateAndCurrencyOverview currency="SAR" torf="True" rate="4" />
        <ExchangeRateAndCurrencyOverview currency="EUR" torf="False" rate="8" />
        <ExchangeRateAndCurrencyOverview currency="EGP" torf="True" rate="1" />
      </div>
    </div>
  );
}

export default ExchangeRateAndCurrency;
