
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BiHome } from 'react-icons/bi';
import { FaWpforms } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
const Sidebar: React.FC = () => {
  const [open,setOpen]=useState(true);
  const [submenu,setSubmenu]=useState(false);
 const [submenu2,setSubmenu2]=useState(false);
 
  
  return (
    <div className={`bg-gray-100 text-black h-screen mb-12 p-4 pt-8 ${open ? "w-72" : "w-20 p-4"} duartion-400  relative`}>
    <BsArrowLeftShort
      className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-gray cursor-pointer ${!open &&"rotate-180"}`}
      onClick={() => setOpen(!open)}/>
      <Link to="/" className="block py-2 inline-flex">
       <BiHome className='text-4xl mr-6 '/>
       <button className={`text-2xl ${!open && "scale-0"}`}> Home </button>
      </Link>


  {/*button for diplaying dropdown components*/}


     <button className=' block py-2 inline flex  mt-3'onClick={()=>setSubmenu(!submenu)}>
<FaUsersCog className='text-4xl mr-6 '/><span className={`text-2xl ${!open && "scale-0"}`}>HRM</span>
<MdOutlineKeyboardArrowRight className={`text-3xl ml-16 ${!open && "scale-0"} ${submenu &&"rotate-90"}`}/>
     </button>
     {submenu && (
        <div className={`ml-12  ${!open && "scale-0"}`}>
          
          <Link to="/details" className="block py-2 inline flex "> 
          <FaWpforms className='text-2xl mr-6 '/>HRM Overview</Link>
          <button className={`block py-2 inline flex `} onClick={()=>setSubmenu2((!submenu2))}><FaUserAlt className='text-2xl mr-6 '/>Employee <MdOutlineKeyboardArrowRight className={`text-2xl  mt-1 ml-16 ${!open && "scale-0"} ${submenu2 &&"rotate-90"}`}/></button>
          
          {/*submenu item*/}


          {submenu2 &&(
            <div className={`ml-2   text-sm  ${!open && "scale-0"}`}>
              <button className='inline-flex  '>
              <FaUserEdit className='text-xl   mt-2  mr-7'/>
                <Link to="/manageemployee" className="block py-2 ">
              Manage Employee</Link></button>
               </div>
          )}
        </div>

      
      )}
      
      </div>
  );
  
};

export default Sidebar;
