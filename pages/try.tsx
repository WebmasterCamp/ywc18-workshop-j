import { Modal } from "core/Modal";
import React, { useState } from "react";

const Try = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-purple-500 rounded shadow outline-none hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <Modal
        modalTitle="Hello world"
        isShow={showModal}
        onClose={() => setShowModal(false)}
      >
        <div className="relative w-[600px] flex-auto p-6">
          <p className="my-4 text-lg leading-relaxed">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! re
            slowed down by their perception of themselves. If taught you can’t
            do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Try;
