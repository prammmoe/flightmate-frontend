// page.js
"use client";
import React from "react";
import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <Header />
      <HeroText />
      <div className="flex-grow flex items-center justify-center mt-20 z-10">
        <Form />
      </div>
    </div>
  );
};

export default App;
