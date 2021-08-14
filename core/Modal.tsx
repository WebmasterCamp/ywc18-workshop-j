import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = ({ modalTitle, isShow, children, onClose }) => {
  return (
    <>
      {isShow ? (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <div className="relative mx-auto my-6">
              <div className="flex flex-col w-full bg-white border-0 outline-none focus:outline-none">
                <div className="flex justify-end">
                  <button
                    className="m-4 float-right text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={onClose}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black opacity-50"></div>
        </>
      ) : null}
    </>
  );
};
