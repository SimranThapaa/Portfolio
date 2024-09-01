import React from "react";

function Sidebar() {
  return (
    <div className="sidebar_menu  left-0 top-0 bottom-0 fixed bg-white flex items-center w-[20%] shadow">
      <div className="sidebar_inner w-full py-0 px-[70px] text-left">
        <div className="logo mb-[60px] oleo-script-bold text-6xl">
          <a href="#">Simran</a>
        </div>
        <div className="menu mb-[55px]">
          <ul className="anchor_nav">
            <li className="w-full current">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#service"
              >
                Services
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#timeline"
              >
                Timeline
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#testimonial"
              >
                Testimonial
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#news"
              >
                News
              </a>
            </li>
            <li className="w-full">
              <a
                className="inline-block text-[#868a9b] px-0 py-[5px] transition-all duration-300 hover:text-black cursor-pointer"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright text-[#868a9b]">
          <p>Copyright 2024</p>
          <p>All rights are reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
