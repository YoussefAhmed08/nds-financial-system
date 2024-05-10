import Kash from "../assets/Mask Group 2.png";
import Back from "../assets/noun-back-3750561.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";

function CorporateDetails() {
  const moveBack = useMoveBack();
  const { corporateId } = useParams();
  const { t } = useTranslation();

  const corporateDetails = useSelector((state) => state.corporates.corporate);

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    // Months are zero-based, so January is 0
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Format the date and time as needed
    const formattedDateTime = `${year}-${month}-${day}`;

    return formattedDateTime;
  }

  const currentDateTime = getCurrentDateTime();

  const corporateDetail = corporateDetails.filter(
    (corporate) => corporate.id === parseInt(corporateId)
  );

  return (
    <>
      {corporateDetail.map((corporateDetail) => (
        <div
          key={corporateDetail.id}
          className="relative flex flex-col items-center w-auto rounded-lg bg-white gap-3"
        >
          <button onClick={moveBack} className="mr-[85rem] my-5">
            <img src={Back} alt="back" />
          </button>
          <p className="mr-[74rem] text-left text-[23px] leading-28 text-[#46433F]">
            Coroporate Details {corporateId}
          </p>
          <img src={Kash} alt="kash" className="py-5 ml-[-1270px]" />
          <div className="flex items-center justify-around gap-20">
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-28">{t("Creation Date")}</p>
              <p className="text-[#46433F]">{currentDateTime}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-44">{t("Corporate Name AR")}</p>
              <p className="text-[#46433F]">{corporateDetail.titleAR}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-44">{t("Corporate Name EN")}</p>
              <p className="text-[#46433F]">{corporateDetail.titleEN}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-48">{t("Mother Company Name")}</p>
              <p className="text-[#46433F]">Noqood Holding</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-32">{t("Mobile Number")}</p>
              <p className="text-[#46433F]">01234567890</p>
            </div>
            <div className="flex flex-col gap-5 w-56">
              <p className="text-[#979797]">{t("Email")}</p>
              <p className="text-[#46433F]">{corporateDetail.email}</p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-20 mr-16">
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-28">{t("Status")}</p>
              <p className="text-[#46433F]">Active</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-44">{t("Finance")}</p>
              <p className="text-[#46433F]">كاش ناو</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-44">{t("Commercial Register")}</p>
              <p className="text-[#46433F]">20505589621</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-48">{t("Tax Card Number")}</p>
              <p className="text-[#46433F]">886-175-569</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[#979797] w-32">{t("Tax Card Number")}</p>
              <p className="text-[#46433F]">{t("145-5-12345-563-22-45")}</p>
            </div>
            <div className="flex flex-col gap-5 mr-20">
              <p className="text-[#979797]">{t("City")}</p>
              <p className="text-[#46433F]">Cairo</p>
            </div>
          </div>
          <div className="flex items-center justify-around gap-20 mr-[34rem]">
            <div className="flex flex-col gap-5 w-28">
              <p className="text-[#979797] w-48">{t("District")}</p>
              <p className="text-[#46433F]">Sheraton</p>
            </div>
            <div className="flex flex-col gap-5 mr-20">
              <p className="text-[#979797] w-32">{t("Full Address")}</p>
              <p className="text-[#46433F]">
                {t("Cairo compex mall , building 3 , Ankara st.")}
              </p>
            </div>
            <div className="flex flex-col gap-5 ml-16">
              <p className="text-[#979797]">{t("Default Currency")}</p>
              <p className="text-[#46433F]">Egyptian pound - EGP</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-around gap-2 mr-[82rem]">
            {" "}
            <p className="text-[#979797]">{t("Owners Name")}</p>
            <p className="text-[#46433F]">Youssef Ahmed</p>
            <p className="text-[#46433F]">Youssef Again</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CorporateDetails;
