import { Link } from "react-router-dom";
import LogoutImage from "../assets/noun-log-out-3327100.png";
import { useTranslation } from "react-i18next";

function LogOut() {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col justify-center bg-white w-[476px] h-[260px] rounded-lg items-center gap-8">
      <div className="flex flex-col ml-[-96px] gap-5">
        <div className="flex justify-start items-center gap-3">
          <img
            src={LogoutImage}
            alt="logout"
            className="w-[25px] h-[25px] bg-transparent bg-no-repeat bg-center bg-cover"
          />
          <p className="text-left font-bold text-[23px] -mt-2 leading-28 text-Montserrat text-[#46433F]">
            {t("Log Out")}
          </p>
        </div>
        <p className="text-left text-xl leading-normal font-Montserrat text-[#46433F]">
          {t("Are you sure to log out?")}
        </p>
      </div>
      <Link
        to="/"
        className="w-[317px] h-[53px] bg-[#E1044C] rounded-[15px] flex items-center justify-center text-white font-semibold"
      >
        {t("Yes, log out")}
      </Link>
    </div>
  );
}

export default LogOut;
