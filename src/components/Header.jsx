import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const Haeder = () => {
  const [openMenu, setopenMenu] = useState(false);
  return (
    <nav className="flex sm:h-[15vh] h-[10vh] justify-between px-8 py-2 items-center w-full">
      <a href="/" className="h-full">
        <img src={logo} alt="logo" className="h-full slidedown" />
      </a>
      <div className="gap-8 text-gray-300 justify-center items-center sm:flex hidden font-semibold">
        <a href="/" className="slidedown hover:text-secondary">
          Log In / Sign Up
        </a>
        <a href="/" className="slidedown hover:text-secondary">
          About Us
        </a>
        <a href="/" className="slidedown hover:text-secondary">
          For Recruiters / Companies
        </a>
      </div>
      {openMenu ? (
        <AiOutlineClose
          color="white"
          size={30}
          className="sm:hidden block cursor-pointer z-10"
          onClick={() => setopenMenu(false)}
        />
      ) : (
        <AiOutlineMenu
          color="white"
          size={30}
          className="sm:hidden block cursor-pointer z-10"
          onClick={() => setopenMenu(true)}
        />
      )}

      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } p-6 bg-primary absolute top-[16vh] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar border-2 border-gray-300`}
      >
        <ul className="list-none flex justify-end items-center flex-col flex-1">
          <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-300 mb-4 border-b-2 border-gray-300 w-full text-center py-2">
            <a href="/">Log In / Sign Up</a>
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-300 mb-4 border-b-2 border-gray-300 w-full text-center py-2">
            <a href="/">About Us</a>
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[16px] text-gray-300 text-center py-2">
            <a href="/">For Recruiters / Companies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Haeder;
