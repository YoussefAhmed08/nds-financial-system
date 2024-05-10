import { useState } from "react";
import Add from "../assets/vuesax-linear-add.svg";
import LevelStructureOverview from "../components/LevelStructureOverview";
import Modal from "../components/Modal";
import AddLevelStructure from "../components/AddLevelStructure";
import { useTranslation } from "react-i18next";
function LevelStructure() {
  const [isSelected, setIsSelected] = useState("account");
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="flex justify-around gap-[65%]">
        <div className="w-[337px] h-[65px] rounded-2xl flex items-center justify-evenly shadow-md">
          <div
            className={`flex items-center justify-center w-[40%] h-[100%] ${
              isSelected === "account"
                ? "border-b-4 rounded-bl rounded-br border-[#E5A812]"
                : "border-b-4 border-b-white"
            }`}
          >
            <button
              onClick={() => setIsSelected("account")}
              className={` text-lg font-semibold ${
                isSelected === "account" ? "text-[#E5A812]" : "text-[#979797]"
              }`}
            >
              {t("Account")}
            </button>
          </div>
          <div
            className={`flex items-center justify-center w-[40%] h-[100%] ${
              isSelected === "cost-center"
                ? "border-b-4 rounded-bl rounded-br border-[#E5A812]"
                : "border-b-4 border-b-white"
            }`}
          >
            <button
              onClick={() => setIsSelected("cost-center")}
              className={`text-[#979797] text-lg font-semibold ${
                isSelected === "cost-center"
                  ? "text-[#E5A812]"
                  : "text-[#979797]"
              }`}
            >
              {t("Cost Center")}
            </button>
          </div>
        </div>
        <Modal>
          <Modal.Open opens="levelstructureadd">
            <span className="cursor-pointer flex gap-2 items-center justify-center w-[114px] h-[65px] bg-[#1E2C5F] rounded-2xl text-white text-xl">
              <img src={Add} alt="add" className="w-[24px] h-[24px]" />
              {t("Add")}
            </span>
          </Modal.Open>
          <Modal.Window name="levelstructureadd">
            <AddLevelStructure />
          </Modal.Window>
        </Modal>
      </div>
      <div className="flex items-center justify-around py-5 m-10 rounded-3xl bg-[#F7F7F7]">
        <p className="text-lg text-[#727272]">{t("No")}</p>
        <p className="text-lg text-[#727272]">{t("Level Name")}</p>
        <p className="text-lg text-[#727272]">{t("Length")}</p>
        <p className="text-lg text-[#727272]">{t("Last Level")}</p>
        <p className="text-lg text-[#727272]">{t("Actions")}</p>
      </div>
      <LevelStructureOverview num="1" />
      <LevelStructureOverview num="2" />
      <LevelStructureOverview num="3" />
      <LevelStructureOverview num="4" />
      <LevelStructureOverview num="5" />
      <LevelStructureOverview num="6" />
    </div>
  );
}

export default LevelStructure;
