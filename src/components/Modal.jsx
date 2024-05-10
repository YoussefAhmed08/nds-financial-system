import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState(false);

  const close = () => setOpenName(false);
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opens) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-[#D8D7E6] bg-opacity-50 z-100 transition-all duration-500">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg transition-all duration-500"
      >
        {cloneElement(children, { close })}
        <button
          className="flex items-center justify-center absolute top-[-5px] right-[-5px] bg-white rounded-full border-[5px] border-opacity-80 border-[#D8D7E6] w-[50px] h-[50px] text-[1.8rem] "
          onClick={close}
        >
          &times;
        </button>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
