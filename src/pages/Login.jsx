import Refund from "../assets/Refund-bro.png";
import NDS from "../assets/NDS FINAL darkblue.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [isVisible, setIsVisible] = useState(true);

  function ToggleVisible() {
    setIsVisible(() => !isVisible);
  }

  return (
    <>
      <div className="flex gap-96 items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-16">
          <img
            src={NDS}
            alt="NDS FINAL darkblue"
            className="w-[199px] h-[87px]"
          />
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your username or email address"
              className="pl-8 w-[453px] h-[65px] shadow-md border border-gray-300 rounded-lg outline-none"
            />
            <div className="flex items-center justify-between pr-6 pl-8 w-[453px] h-[65px] shadow-md border border-gray-300 rounded-lg">
              <input
                type={isVisible ? "password" : "text"}
                placeholder="Enter the password"
                className="outline-none w-[453px] h-[55px]"
              />
              <button onClick={ToggleVisible}>
                {isVisible ? (
                  <FaEye className="w-[28px] h-[19px] cursor-pointer opacity-30" />
                ) : (
                  <FaEyeSlash className="w-[28px] h-[19px] cursor-pointer opacity-30" />
                )}
              </button>
            </div>
            <Link
              to="/forgetpass"
              className="w-[150px] h-[19px] ml-[300px] pt-2 pb-8 mb-4 text-left text-base font-medium leading-5 font-montserrat text-gray-700"
            >
              Forget Password ?
            </Link>
          </div>
          <Link
            to="/corporates"
            className="w-[451px] h-[53px] bg-[#1E2C5F] rounded-[15px] text-white font-montserrat font-semibold flex items-center justify-center mt-[-50px]"
          >
            LOG IN
          </Link>
        </div>
        <div>
          <img src={Refund} alt="Refund-bro" />
        </div>
      </div>
    </>
  );
}

export default Login;
