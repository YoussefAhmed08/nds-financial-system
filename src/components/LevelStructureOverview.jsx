import Edit from "../assets/edit-2-bold.svg";
import EditLevelStructure from "./EditLevelStructure";
import Modal from "./Modal";
import { IoIosCheckmarkCircle } from "react-icons/io";

function LevelStructureOverview({ num, display }) {
  return (
    <div className="flex justify-around items-center px-5 py-8">
      <p className="font-montserrat">{num}</p>
      <p className="font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F] -ml-5">
        Level {num}
      </p>
      <p className="font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F] -ml-5">
        {+num + 1} digits
      </p>
      {+num === 6 ? (
        <IoIosCheckmarkCircle className="opacity-80 h-[24px] w-[24px]" />
      ) : (
        <IoIosCheckmarkCircle className="opacity-0 h-[24px] w-[24px]" />
      )}
      <Modal>
        <Modal.Open opens="levelstructureedit">
          <img
            src={Edit}
            alt="edit"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </Modal.Open>
        <Modal.Window name="levelstructureedit">
          <EditLevelStructure />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default LevelStructureOverview;
