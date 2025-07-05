import React from 'react';
import logo from '../asset/logo.jpg';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
    <img src={logo} alt="Logo" className="w-24 h-24 animate-spin" />
  </div>
);

export default Loader;
