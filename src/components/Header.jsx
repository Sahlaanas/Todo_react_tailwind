import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#5465ff] to-[#788bff] py-8 px-7 relative text-white">
      <div className="right-0 top-0 absolute w-[150px] h-[150px] rounded-bl-full bg-radial-[at_70%_30%] from-[#ffffff26] to-[#ffffff00] to-100%"></div>
      
      <h1 className="text-[28px] font-bold mb-1.5 tracking-tight ">Todo App</h1>
      <p className="text-[15px] font-normal opacity-[0.9]">Plan & Organize your Day</p>
      <div className="text-sm inline-block bg-[#ffffff2e] py-1.5 px-3 rounded-[20px] mt-4">Thursday, April 24, 2025</div>
    </div>
  );
};

export default Header;
