import Back from "../assets/noun-back-3750561.png";
import Mail from "../assets/533.png";
import { Link, useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col gap-4 mb-8">
          <img
            onClick={() => navigate("/")}
            src={Back}
            alt="noun-back"
            className="w-[22px] h-[16px] bg-transparent bg-no-repeat bg-padding-box cursor-pointer"
          />
          <p className="text-left font-bold text-lg leading-6 font-montserrat text-gray-700">
            Forget Password ?
          </p>
          <p className="text-left text-base font-normal font-montserrat text-gray-500">
            To Reset Your Password Fill The Following Data.
          </p>
          <img
            src={Mail}
            alt="mail"
            className="w-[93px] h-[105px] self-center m-12"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[453px] h-[65px] bg-white shadow-md rounded-lg pl-8 outline-none"
          />
          <Link
            to="/"
            className="w-[451px] h-[53px] bg-[#1E2C5F] rounded-[15px] flex items-center justify-center text-white font-montserrat font-semibold"
          >
            SUBMIT
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
