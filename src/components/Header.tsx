import Link from "next/link";
import {
  BsCameraFill,
  BsUpload,
  BsFillHeartFill,
  BsSearch,
} from "react-icons/Bs";
import ModeBtns from "./ModeBtns";

export default function Header() {
  return (
    <header className="my-6">
      <nav className="flex">
        <div className="flex items-center space-x-2 transition md:w-3/4 md:p-1 md:space-x-6">
          <Link href="/" className="icons">
            <BsCameraFill size={20} />
            <span>Gallery</span>
          </Link>
          <div className="w-full flex items-center space-x-2 py-1 px-4 rounded-lg shadow-sm bg-gray-100 text-gray-500">
            <BsSearch size={23} />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 md:w-1/4 md:space-x-4 lg:space-x-6">
          <Link href="" className="icons">
            <BsUpload size={20} />
            <span>Upload</span>
          </Link>
          <Link href="" className="icons">
            <BsFillHeartFill size={20} />
            <span>Saved</span>
          </Link>
          <ModeBtns />
        </div>
      </nav>
    </header>
  );
}
