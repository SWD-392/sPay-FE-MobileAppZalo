import React from "react";
import { useNavigate } from "react-router-dom";

const Footter = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleProfileClick = () => {
    navigate("/user");
  };
  const handleQrcodeClick = () => {
    navigate("/qr_code");
  };
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white bottom-0 left-1/2 dark:bg-gray-700">
      <div className="flex justify-between max-w-lg mx-auto h-full">
        <button
          onClick={handleHomeClick}
          data-tooltip-target="tooltip-home"
          type="button"
          className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span className="sr-only">Home</span>
        </button>
        <button
          onClick={handleQrcodeClick}
          data-tooltip-target="tooltip-new"
          type="button"
          className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <span className="sr-only">Qr Scanner</span>
        </button>
        <button
          onClick={handleProfileClick}
          data-tooltip-target="tooltip-profile"
          type="button"
          className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <svg
            className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <span className="sr-only">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Footter;
