import Gallery from "../assets/vuesax-linear-gallery-add.svg";
import ArrowCircle from "../assets/vuesax-linear-arrow-circle-right.svg";
import Add from "../assets/add-circle-linear.svg";
import Back from "../assets/noun-back-3750561.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCorporate } from "../redux/corporatesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { toast } from "react-hot-toast";

function EditCorporateForm() {
  const moveBack = useMoveBack();

  const navigate = useNavigate();
  const { corporateId } = useParams();

  const { t } = useTranslation();

  const corporates = useSelector((state) => state.corporates.corporate);

  const existingCorporate = corporates.filter(
    (corporate) => corporate.id === parseInt(corporateId)
  );

  // const { titleAR, titleEN, email } = existingCorporate[0];

  // const [upratedTitleAR, setTitleAR] = useState(titleAR);
  // const [upratedTitleEN, setTitleEN] = useState(titleEN);
  // const [upratedEmail, setEmail] = useState(email);

  if (existingCorporate.length > 0) {
    var { titleAR, titleEN, email } = existingCorporate[0];
    // Now you can safely destructure the properties and use them
    var [upratedTitleAR, setTitleAR] = useState(titleAR);
    var [upratedTitleEN, setTitleEN] = useState(titleEN);
    var [upratedEmail, setEmail] = useState(email);
  }

  const dispatch = useDispatch();

  const imageUploadContainer = document.querySelector(
    ".image-upload-container"
  );
  const imageInput = imageUploadContainer?.querySelector('input[type="file"]');

  imageUploadContainer?.addEventListener("click", () => {
    imageInput.click();
  });

  function handleUpdate(e) {
    e.preventDefault();
    dispatch(
      updateCorporate({
        id: corporateId,
        titleAR: upratedTitleAR,
        titleEN: upratedTitleEN,
        email: upratedEmail,
      })
    );
    toast.success("Corporate updated successfully");
    navigate("/corporates");
  }

  return (
    <div className="flex flex-col items-center w-screen h-fit rounded-lg bg-white">
      <button onClick={moveBack} className="mr-[66rem] my-5">
        <img src={Back} alt="back" />
      </button>
      <p className="w-[227px] h-[27px] text-left font-bold text-2xl leading-6 text-gray-700 ml-[-850px]">
        {t("Edit Corporate")}
      </p>
      <div className="flex p-10 ml-[-600px]">
        <div className="image-upload-container cursor-pointer w-[10vw] h-[13vh] bg-gray-50 rounded-2xl flex items-center justify-center ml-12">
          <input type="file" accept="image/*" className="hidden" />
          <img src={Gallery} alt="gallery" />
        </div>
        <div className="flex flex-col px-10 gap-5">
          <p className="text-left font-normal text-base leading-normal text-montserrat text-[#46433F]">
            {t("Upload Corporate Logo")}
          </p>
          <p className="text-left font-normal text-sm leading-[18px] text-[#979797]">
            {t("Upload Corporate Logo not more than 3MB")}
          </p>
        </div>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-3"
        onSubmit={handleUpdate}
      >
        <div className="flex gap-5">
          <input
            onChange={(e) => setTitleAR(e.target.value)}
            type="text"
            value={upratedTitleAR}
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none"
            placeholder={t("Corporate Name AR")}
          />
          <input
            required
            onChange={(e) => setTitleEN(e.target.value)}
            type="text"
            value={upratedTitleEN}
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none"
            placeholder={t("Corporate Name EN")}
          />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={upratedEmail}
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none"
            placeholder={t("Email")}
          />
          <input
            disabled
            type="text"
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none cursor-not-allowed"
            placeholder={t("Mobile Number")}
          />
        </div>
        <div className="flex gap-5">
          <div className="flex items-center bg-white w-[260px] h-[65px] justify-between pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("Mother Company")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>

          <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("Status")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("Line of business")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <input
            disabled
            type="text"
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none cursor-not-allowed"
            placeholder={t("Commercial Register")}
          />
        </div>
        <div className="flex gap-5">
          <input
            disabled
            type="text"
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none cursor-not-allowed"
            placeholder={t("Tax Card Number")}
          />
          <input
            disabled
            type="text"
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none cursor-not-allowed"
            placeholder={t("Tax File Number")}
          />
          <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("City")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("District")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <input
            disabled
            type="text"
            className="bg-white shadow-lg rounded-lg w-[260px] h-[65px] pl-8 outline-none cursor-not-allowed"
            placeholder={t("Full Address")}
          />
          <div className="flex items-center justify-between bg-white w-[260px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg  outline-none cursor-not-allowed"
              placeholder={t("Default Currency")}
            />
            <img
              src={ArrowCircle}
              alt="arr circle"
              className="w-[24px] h-[24px] rotate-90"
            />
          </div>
          <div className="flex items-center justify-between bg-white w-[536px] h-[65px] pr-6 pl-8 shadow-md rounded-xl">
            <input
              disabled
              type="text"
              className="bg-white rounded-lg w-[536px] outline-none cursor-not-allowed"
              placeholder={t("Owners Name")}
            />
            <img src={Add} alt="add" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-[451px] h-[53px] text-white bg-[#1E2C5F] rounded-lg font-semibold outline-none"
        >
          {t("Edit Corporate")}
        </button>
      </form>
    </div>
  );
}

export default EditCorporateForm;
