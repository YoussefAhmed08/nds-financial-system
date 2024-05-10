import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Edit from "../assets/edit-2-bold.svg";
import Delete from "../assets/vuesax-linear-add-circle.svg";
import CorporateDetails from "./CorporateDetails";
import Modal from "./Modal";
import { deleteCorporate } from "../redux/corporatesSlice";
import EditCorporateForm from "./EditCorporateForm";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function CorpratesView() {
  const { t } = useTranslation();

  const [openedModalId, setOpenedModalId] = useState(null);

  const handleModalOpen = (id) => {
    setOpenedModalId(id === openedModalId ? id : null);
  };

  const corporates = useSelector((state) => state.corporates.corporate);

  const dispatch = useDispatch();

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

  return (
    <>
      {corporates.length > 0 ? (
        corporates.map((corporate) => (
          <div
            key={corporate.id}
            className="flex justify-around items-center px-4 py-6 flex-wrap"
          >
            <p className="font-montserrat w-1">{corporate.id}</p>
            <Link to={`/corporates/details/${corporate.id}`}>
              <span className="w-10 pr-10 text-base font-normal font-almarai text-yellow-500 underline cursor-pointer">
                {corporate.titleAR}
              </span>
            </Link>
            <Link to={`/corporates/details/${corporate.id}`}>
              <span className="w-10 text-base font-normal font-almarai text-yellow-500 underline cursor-pointer">
                {corporate.titleEN}
              </span>
            </Link>
            <p className="w-20 font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F]">
              {currentDateTime}
            </p>
            <p className="w-32 font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F]">
              {corporate.email}
            </p>
            <p className="w-10 font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F]">
              Finance
            </p>
            <p className="w-10 font-medium text-base leading-normal font-montserrat text-[15px] text-[#46433F]">
              Active
            </p>
            <div className="flex items-center justify-center gap-1">
              <Link to={`/corporates/edit/${corporate.id}`}>
                <img
                  src={Edit}
                  alt="edit"
                  className="w-[24px] h-[24px] bg-transparent bg-no-repeat bg-center bg-cover cursor-pointer"
                />
              </Link>
              <button
                onClick={() => {
                  dispatch(deleteCorporate(corporate.id));
                  toast.success("Corporate deleted successfully");
                }}
              >
                <img
                  src={Delete}
                  alt="delete"
                  className="w-[30px] h-[30px] bg-transparent bg-no-repeat bg-center bg-cover"
                />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center my-16 gap-2">
          <p className="text-3xl text-[#46433F]">
            {t("There is no corporates")}
          </p>
          <p className="text-lg text-[#979797]">{t("Please add corporate")}</p>
        </div>
      )}
    </>
  );
}

export default CorpratesView;
