// components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-white bg-opacity-100 fixed top-0 left-0 w-full px-8 py-6 rounded z-20" style={{ position: "sticky" }}>
      <div className="flex justify-between items-center">
        <h1 className="text-blue-400 text-2xl font-bold">FlightMate</h1>
        <div className="flex">
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Daftar
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Masuk
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
