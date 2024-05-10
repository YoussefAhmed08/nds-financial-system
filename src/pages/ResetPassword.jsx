import Back from "../assets/noun-back-3750561.png";
import Lock from "../assets/52.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function ResetPassword() {
  const navigate = useNavigate();
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  function ToggleVisible1() {
    setIsVisible1(() => !isVisible1);
  }

  function ToggleVisible2() {
    setIsVisible2(() => !isVisible2);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col gap-4">
          <img
            onClick={() => navigate("/corprates")}
            src={Back}
            alt="noun-back"
            className="w-[22px] h-[16px] bg-transparent bg-no-repeat bg-padding-box cursor-pointer"
          />
          <p className="text-left font-bold text-lg leading-6 font-montserrat text-gray-700">
            Reset Password
          </p>
          <p className="text-left text-base font-normal font-montserrat text-gray-500">
            Write your new password please .
          </p>
          <img
            src={Lock}
            alt="mail"
            className="w-[93px] h-[105px] self-center m-12"
          />
          <div className="flex items-center justify-between pr-6 pl-8 w-[453px] h-[65px] shadow-md border border-gray-300 rounded-lg">
            <input
              type={isVisible1 ? "password" : "text"}
              placeholder="Enter the password"
              className="outline-none w-[453px] h-[55px]"
            />
            <button onClick={ToggleVisible1}>
              {isVisible1 ? (
                <FaEye className="w-[28px] h-[19px] cursor-pointer" />
              ) : (
                <FaEyeSlash className="w-[28px] h-[19px] cursor-pointer" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between pr-6 pl-8 w-[453px] h-[65px] shadow-md border border-gray-300 rounded-lg">
            <input
              type={isVisible2 ? "password" : "text"}
              placeholder="Enter the password"
              className="outline-none w-[453px] h-[55px]"
            />
            <button onClick={ToggleVisible2}>
              {isVisible2 ? (
                <FaEye className="w-[28px] h-[19px] cursor-pointer" />
              ) : (
                <FaEyeSlash className="w-[28px] h-[19px] cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
