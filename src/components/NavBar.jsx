import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-700 text-white h-[10vh] ">
      <div className="logo mx-9">
        <span className="font-bold text-2xl text-green-300">&lt; </span>
        <span className="font-bold text-xl">iTask </span>
        <span className="font-bold text-2xl text-green-300">&gt; </span>
      </div>
      <ul className="flex gap-7 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          Your Task
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
