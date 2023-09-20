import React,{useState} from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";



const Navbar = () => {
  const [nav,setnav]=useState(false);
  const [logo,setlogo]=useState(false);
  const handlenav=()=>{
    setnav(!nav);
    setlogo(!logo);
  }
  return (
    <div className="absolute z-10 flex items-center justify-between w-full h-20 px-4 text-white">
      <div>
        <h1 className={logo ?"hidden" :"block"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li> 
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="mr-2"/>
        <BsPerson />
      </div>
      <div onClick={handlenav} className="z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={20} className="text-black"/>:<HiOutlineMenuAlt4 className="md:hidden" size={20} />}
        
      </div>
      <div onClick={handlenav} className={nav ? "absolute top-0 left-0 w-full px-5 bg-gray-100/90 py-7":"absolute left-[-100%] "}>
        <h1 className="text-black">BEACHES.</h1>
        <ul>
          <li className="text-black border-b">Home</li>
          <li className="text-black border-b">Destination</li>
          <li className="text-black border-b">Travel</li>
          <li className="text-black border-b">View</li>
          <li className="text-black border-b">Book</li>
        </ul>
        <div className="flex flex-col ">
          <button className="my-6">Search</button>
          <button>Accounts</button>
        </div>
        <div className="flex justify-between my-8 ">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaPinterest className="icon" />
          <FaYoutube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
