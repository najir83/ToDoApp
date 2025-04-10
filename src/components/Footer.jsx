import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-slate-700 text-white h-[10vh] ">
      <div className="flex flex-col">
        <div>
          <span className="font-bold text-2xl text-green-300">&lt; </span>
          <span className="font-bold text-xl">iTask </span>
          <span className="font-bold text-2xl text-green-300">&gt; </span>
        </div>
        <p>Code by Sk Najir</p>
      </div>
    </div>
  );
};

export default Footer;
