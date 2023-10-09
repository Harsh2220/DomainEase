import React from "react";
import useAppState, { useModalStore } from "@/store/store";

interface ModalProps {
  isOpen: boolean;
}

const availableBuyOptions = [
  {
    type: "Buy with Ethereum",
  },
];

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  const { selectedDomain } = useAppState();
  const { toggle } = useModalStore();
  if (!isOpen) {
    return null;
  }

  if (!selectedDomain) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black- opacity-70 backdrop-blur-3xl"></div>
      <div className="bg-black text-white w-1/4 h-1/4 p-8 rounded-lg border-gray-500 border-opacity-100 z-50 relative">
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-400"
          onClick={toggle}
        >
          Close
        </button>
        <h2 className="text-3xl font-bold mb-4">
          Buy {selectedDomain?.domainName}
        </h2>
        {availableBuyOptions.map((item, index) => {
          return <h3 key={index}>{item.type}</h3>;
        })}
      </div>
    </div>
  );
};

export default Modal;
