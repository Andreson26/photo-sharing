import Link from "next/link";
import { useState } from "react";
import { BsCameraFill, BsFillHeartFill, BsSearch } from "react-icons/Bs";
import ModeBtns from "./ModeBtns";

export default function Header() {
    
  return (
    <header className="my-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-start space-x-4 p-1 rounded-lg shadow-sm bg-gray-100 text-gray-500 md:w-3/4 md:p-3">
          <BsSearch size={23}/>
          <input type="text" placeholder="Search..." className="flex-1 focus:outline-none bg-transparent"/>
        </div>
        <div className="flex items-center justify-end space-x-2 md:w-1/4 md:space-x-4 lg:space-x-8">
          <Link href="" className="icon">
            <BsCameraFill size={20}/>
          </Link>
          <Link href="" className="icon">
            <BsFillHeartFill size={20}/>
          </Link>
          <ModeBtns />
        </div>
      </nav>
    </header>
  );
}
