
import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
const TopBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      <img alt="company logo">
      </img>
     

      
      <div className="flex items-center space-x-4">
        <FaRegUserCircle/>
      </div>
    </div>
  );
};

export default TopBar;
