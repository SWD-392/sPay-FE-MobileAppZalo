import React from 'react';
import { useNavigate } from 'react-router-dom';
 

const HeaderQr = () => {
  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-spacebetween mx-auto">
      <button className=" rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none" onClick={handleNavigateToHomePage}>
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
  </svg>
      </button>
<h1 className="ml-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Mã Thanh Toán</h1>

</div>
  );
};

export default HeaderQr;