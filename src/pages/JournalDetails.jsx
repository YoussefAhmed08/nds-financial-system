import { MdKeyboardBackspace } from "react-icons/md";
import { useMoveBack } from "../hooks/useMoveBack";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import GoldEye from "../assets/noun-eye-3568808 (1).svg";
import { useTranslation } from "react-i18next";

function JournalDetails() {
  const { t } = useTranslation();
  const moveBack = useMoveBack();

  return (
    <div className="flex flex-col gap-10 px-16">
      <MdKeyboardBackspace
        onClick={moveBack}
        className="w-[32px] h-[36px] cursor-pointer text-[#1E2C5F]"
      />
      <p className="text-[#46433F] font-montserrat font-bold text-2xl">
        {t("JOURNAL DETAILS")}
      </p>
      <div className="flex gap-20 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Creation Date")}
          </p>
          <p className="text-[#46433F] font-montserrat">30-03-2024</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Journal Number")}
          </p>
          <p className="text-[#46433F] font-montserrat">3</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Source")}
          </p>
          <p className="text-[#46433F] font-montserrat">
            {t("General Ledger")}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Journal Name")}
          </p>
          <p className="text-[#46433F] font-montserrat">Noqood</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Journal Date")}
          </p>
          <p className="text-[#46433F] font-montserrat">30-03-2024</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Category")}
          </p>
          <p className="text-[#46433F] font-montserrat">{t("Payment")}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[#979797] font-montserrat text-base">
            {t("Journal Status")}
          </p>
          <p className="text-[#00C227] font-montserrat">{t("Posted")}</p>
        </div>
      </div>
      <div className="flex gap-36 justify-center h-[16vh] rounded-xl w-[50vw] ml-[22vw]">
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tl-xl rounded-bl-xl">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("No")}
            </p>
          </div>
          <p className="absolute font-montserrat mt-[144px]">1</p>
          <p className="absolute font-montserrat mt-[294px]">2</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Account Name")}
            </p>
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 rounded-xl absolute  mt-[144px]">
            <p className="font-montserrat text-[#46433F]">Interset Incon</p>
          </div>
          <div className="flex items-center bg-white w-[182px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[294px]">
            <p className="font-montserrat text-[#46433F]">Credit Card</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Type Of Account")}
            </p>
          </div>
          <p className="absolute font-montserrat mt-[144px]">Expensive</p>
          <p className="absolute font-montserrat mt-[294px]">Revenue</p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Currency")}
            </p>
          </div>
          <div className="ml-10 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[144px]">
            <p className="font-montserrat text-[#46433F]">USD</p>
          </div>
          <div className="ml-10 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[294px]">
            <p className="font-montserrat text-[#46433F]">USD</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Debits")}
            </p>
          </div>
          <div className="ml-10 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[144px]">
            <p className="font-montserrat text-[#46433F]">500</p>
          </div>
          <div className="ml-14 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[294px]">
            <p className="font-montserrat text-[#46433F]">0</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Debits Currency")}
            </p>
          </div>
          <p className="absolute font-montserrat mt-[144px] text-[#46433F] font-semibold">
            7850
          </p>
          <p className="absolute font-montserrat mt-[294px] text-[#46433F] font-semibold">
            0
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Credits")}
            </p>
          </div>
          <div className="ml-14 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[144px]">
            <p className="font-montserrat text-[#46433F]">0</p>
          </div>
          <div className="ml-10 flex items-center bg-white w-[102px] h-[48px] pl-3 rounded-xl absolute font-montserrat mt-[294px]">
            <p className="font-montserrat text-[#46433F]">500</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Creidts Currency")}
            </p>
          </div>
          <p className="absolute font-montserrat mt-[144px] text-[#46433F] font-semibold">
            0
          </p>
          <p className="absolute font-montserrat mt-[294px] text-[#46433F] font-semibold">
            7850
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[250px] flex items-center justify-center">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Description")}
            </p>
          </div>
          <p className="absolute font-montserrat mt-[144px]">
            {t("IT Department")}
          </p>
          <hr className="bg-[#C2C2C2] rounded-lg w-[40px] h-[4px] absolute mt-[294px]" />
        </div>
        <div className="flex flex-col items-center justify-center w-10 h-[100%]">
          <div className="bg-[#F7F7F7] h-16 w-[170px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
            <p className="text-base font-normal font-montserrat text-[#727272] ">
              {t("Cost Center")}
            </p>
          </div>
          <hr className="bg-[#C2C2C2] rounded-lg w-[40px] h-[4px] absolute mt-[144px]" />
          <hr className="bg-[#C2C2C2] rounded-lg w-[40px] h-[4px] absolute mt-[294px]" />
        </div>
      </div>
      <div className="flex items-center justify-evenly px-[400px] py-5 rounded-3xl bg-[#1E2C5F] bg-opacity-20 mt-28">
        <p className="text-lg font-raleway font-semibold text-[#46433F]">
          {t("TOTAL")}
        </p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">500</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">7850</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">500</p>
        <p className="text-lg font-raleway font-bold text-[#1E2C5F]">7850</p>
      </div>
      <div className="flex gap-20 items-center">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center bg-[#46433F] bg-opacity-5 w-[106px] h-[53px] rounded-2xl">
            <p className="font-normal font-montserrat text-[#46433F]">
              {t("Archive")}
            </p>
          </div>
          <div className="flex flex-col justify-center overflow-y-auto overflow-x-hidden gap-5 mt-5 rounded-2xl max-h-[364px] bg-[#F7F7F7] py-5 scroll w-[40vw]">
            <div className="flex items-center gap-5 mt-[320px] px-8">
              <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
                <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
                <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat text-[#46433F]">
                  {t("File Name")}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    31-03-2024
                  </p>
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </div>
                <div className="w-[105px] h-[39px] rounded-xl bg-[#E5A812] bg-opacity-5 flex items-center justify-center gap-1 cursor-pointer">
                  <img src={GoldEye} alt="cancel" />
                  <p className="font-montserrat text-sm text-[#E5A812]">View</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 px-8">
              <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
                <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
                <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat text-[#46433F]">
                  {t("File Name")}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    31-03-2024
                  </p>
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </div>
                <div className="w-[105px] h-[39px] rounded-xl bg-[#E5A812] bg-opacity-5 flex items-center justify-center gap-1 cursor-pointer">
                  <img src={GoldEye} alt="cancel" />
                  <p className="font-montserrat text-sm text-[#E5A812]">View</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 px-8">
              <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
                <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
                <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat text-[#46433F]">
                  {t("File Name")}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    31-03-2024
                  </p>
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </div>
                <div className="w-[105px] h-[39px] rounded-xl bg-[#E5A812] bg-opacity-5 flex items-center justify-center gap-1 cursor-pointer">
                  <img src={GoldEye} alt="cancel" />
                  <p className="font-montserrat text-sm text-[#E5A812]">View</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 px-8">
              <div className="flex flex-col bg-[#999999] rounded-2xl w-[302px] h-[150px]">
                <hr className="w-[25px] h-[6px] bg-[white] rounded-2xl mt-4 ml-5" />
                <div className="flex flex-col gap-1 items-center mt-5 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
                <div className="flex flex-col gap-1 items-center mt-3 opacity-20">
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                  <hr className="w-[274px] h-[3px] bg-[white] rounded-2xl" />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat text-[#46433F]">
                  {t("File Name")}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    31-03-2024
                  </p>
                  <p className="font-montserrat text-xs text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </div>
                <div className="w-[105px] h-[39px] rounded-xl bg-[#E5A812] bg-opacity-5 flex items-center justify-center gap-1 cursor-pointer">
                  <img src={GoldEye} alt="cancel" />
                  <p className="font-montserrat text-sm text-[#E5A812]">View</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center bg-[#46433F] bg-opacity-5 w-[106px] h-[53px] rounded-2xl">
            <p className="font-normal font-montserrat text-[#46433F]">
              {t("Remarks")}
            </p>
          </div>
          <div className="bg-[#FAFAFA] w-[40vw] h-[40vh] rounded-2xl flex flex-col">
            <div className="w-[37vw] h-[35vh] m-10 overflow-y-auto scroll">
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg font-montserrat">
                  {t("Check The Account Name Please")}
                </p>
                <span className="flex gap-3">
                  <p className="font-montserrat text-[#8D8D8D]">30-03-2024</p>
                  <p className="font-montserrat text-[#8D8D8D]">03:55 PM</p>
                  <p className="font-montserrat text-[#8D8D8D]">
                    {t("BY : Youssef Ahmed")}
                  </p>
                </span>
                <hr className="w-[95%] pb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 py-8">
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#127CF5] text-[white] font-montserrat text-lg font-medium">
          {t("REVERSE")}
        </button>
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#E1044C] text-[white] font-montserrat text-lg font-medium">
          {t("DELETE")}
        </button>
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#00C227] text-[white] font-montserrat text-lg font-medium opacity-30">
          {t("POST")}
        </button>
        <button className="w-[196px] h-[53px] rounded-2xl bg-[#46433F] text-[white] font-montserrat text-lg font-medium">
          {t("CANCEL")}
        </button>
      </div>
    </div>
  );
}

export default JournalDetails;
