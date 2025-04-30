import React from "react";
const Popup = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Field Created</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <i className="material-symbols-rounded">close</i>
            </button>
          </div>
          <p className="mb-4">
            Your custom field has been created successfully.
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded bg-blue-600 text-white"
              onClick={onClose}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Popup;
  