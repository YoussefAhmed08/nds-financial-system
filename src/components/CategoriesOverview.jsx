import Edit from "../assets/edit-2-bold.svg";
import EditCategory from "./EditCategory";
import Modal from "./Modal";

function CategoriesOverview({ num }) {
  return (
    <div className="flex gap-[215px] ml-32 mt-10">
      <p className="text-lg font-montserrat text-[#46433F]">{num}</p>
      <p className="text-lg font-montserrat text-[#46433F]">Invoice</p>
      <p className="text-lg font-montserrat text-[#46433F]">فاتورة</p>
      <p className="text-lg font-montserrat text-[#46433F]">GL</p>
      <p className="text-lg font-montserrat text-[#46433F]">12-11-2021</p>
      <p className="text-lg font-montserrat text-[#46433F]">Active</p>
      <Modal>
        <Modal.Open opens="editcategory">
          <img
            src={Edit}
            alt="edit"
            className="w-[24px] h-[24px] cursor-pointer"
          />
        </Modal.Open>
        <Modal.Window name="editcategory">
          <EditCategory />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CategoriesOverview;
