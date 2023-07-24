"use client";
import useModal from "@/hooks/useModal";
import React from "react";
import Modal from "./Modal";

const Test2 = () => {
  const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
  return (
    <div>
      <button onClick={handleOpenModal}>test 2</button>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          className="modal-content"
        >
          <h2>test 2</h2>
          <p>This is the content of the modal.</p>
          <button onClick={handleCloseModal}>close</button>
        </Modal>
      )}
    </div>
  );
};

export default Test2;
