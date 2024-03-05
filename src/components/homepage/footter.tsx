import React from "react";
import { useNavigate } from "react-router-dom";

const Footter = () => {
  const navigate = useNavigate(); 
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleProfileClick = () => {
    navigate('/user');
  };
  const handleQrcodeClick = () => {
    navigate('/qr_code');
  };
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-between max-w-lg mx-auto h-full">
        <button onClick={handleHomeClick} data-tooltip-target="tooltip-home" type="button" className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          <span className="sr-only">Home</span>
        </button>
        <button onClick={handleQrcodeClick} data-tooltip-target="tooltip-new" type="button" className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-qr-code group-hover:text-blue-600" viewBox="0 0 16 16">
            <path d="M2 2h2v2H2z"/>
            <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z"/>
            <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z"/>
            <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z"/>
            <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z"/>
          </svg>
          <span className="sr-only">Qr Scanner</span>
        </button>
        <button onClick={handleProfileClick} data-tooltip-target="tooltip-profile" type="button" className="flex items-center justify-center w-full h-full px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
          <span className="sr-only">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Footter;
