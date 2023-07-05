import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";


import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
 import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Context } from "../Context/ContextAPI";
import Loader from "../Shared/Loader";


const Header = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const{loading,mobileMenu,setMobileMenu}=useContext(Context);
  const navigate=useNavigate();
  const searchQueryHandler=(event)=>
  {
    if((event?.key==="Enter" || event ==="searchButton") && searchQuery?.length>0)
    {
      navigate(`/searchResults/${searchQuery}`);
    }

  };
  const mobileMenuToggle=()=>{
    setMobileMenu(!mobileMenu);
  };
  const {pathName}=useLocation();
  const pageName=pathName?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className='sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black'>
      {loading && <Loader/>}
      <div className="flex h-5 items-center">
        {pageName!=="video" &&(
          <div className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full bg-[#303030]/[0.6]" onClick={mobileMenuToggle}>
            {mobileMenu?(<CgClose className='text-white text-xl'/>):(<SlMenu className='text-white text-xl'/>)}
          </div>
        )}
          <Link to="/" className="flex h-5 items-center">
             <img className="h-full  dark:md:block pr-4" src={ytLogo} alt="Youtube"/>
          </Link>
      </div>    
          <div className="group flex items-center">
              <div className="flex h-8 md:h-10 md:ml-10 md:pl-5  border-white rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                  <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                    {/* <IoIosSearch className="text-white text-xl  "/> */}
                  </div>
                  <input
                     type="text"
                     className=" border-spacing-4 outline-none text-black pr-7 pl-12 rounded-md md:pl-5-w-70 md:group-focus-within:pl-5 md:w-100  lg:w-[500px] lg:h-5-mt-1.5"
                     onChange={(e)=>setSearchQuery(e.target.value)}
                     onKeyUp={searchQueryHandler}
                     value={searchQuery}
                  />
              </div>
                  <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-white rounded-r-3xl bg-white/[0.1]">
                    <IoIosSearch className="text-white md:text-2xl text-xl "/>
                  </button>   
          </div>
          <div className="flex items-center">
               <div className="hidden md:flex">
                 <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030/[0.6]">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer"/>
                 </div>
                 <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030/[0.6] md:flex-items-center-justify-center-ml-2-h-10-w-10-rounded-full-hover:bg-[#303030/[0.6]">
                    <FiBell className="text-white text-xl cursor-pointer "/>
                 </div>
               </div>
               <div className="flex h-8 w-8 overflow-hidden  cursor-pointer rounded-full md:ml-4">
                  <img src="https://xsgames.co/randomusers/assets/avatars/female/0.jpg"/>
                 </div>
          </div>
      </div>
  );
};

export default Header;
// "bg-transparent border-spacing-4 text-white pr-7 pl-12 rounded-md md:pl-5-w-70 md:group-focus-within:pl-5 md:w-100  lg:w-[500px] lg:h-5-mt-1.5"