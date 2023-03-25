import Link from "next/link";
import { useState } from "react";
import {
  BsSearch,
  BsCameraFill,
  BsFillHeartFill,
  BsToggleOff,
  BsToggleOn,
} from "react-icons/Bs";

export default function Header() {
    const [toggle, setToggle] = useState<boolean>(false);
    
  return (
    <header className="my-6">
      <nav className="flex items-center h-12 justify-between">
        <div className="w-3/4 flex items-center justify-start space-x-4 p-4 rounded-lg shadow-md">
          <BsSearch size={23}/>
          <input type="text" placeholder="Search..." className="flex-1 focus:outline-none "/>
        </div>
        <div className="w-1/4 flex items-center justify-end space-x-4">
          <Link href="">
            <BsCameraFill size={25}/>
          </Link>
          <Link href="">
            <BsFillHeartFill size={25} className=""/>
          </Link>
          <Link href="">
            {toggle ? <BsToggleOn size={25}/> : <BsToggleOff size={25}/>}
          </Link>
        </div>
      </nav>
    </header>
  );
}
