import React from "react";

export const Modal = ({ modalTitle, isShow, children, onClose }) => {
  return (
    <>
      {isShow ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative mx-auto my-6">
              <div className="flex flex-col w-full bg-white border-0 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="text-xl text-black">X</span>
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      ) : null}
    </>
  );
};
