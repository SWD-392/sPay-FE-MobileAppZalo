import React from 'react';
 // Import your SVG or PNG logo here

const Header = () => {
  return (
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a  className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="S-Pay App"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-900">S Pay App</span>
  </a>
  </div>
</nav>

  );
};

export default Header;