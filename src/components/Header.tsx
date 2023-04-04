import Link from "next/link";
import { useRouter } from "next/router";
import {  useState } from "react";
import {
  BsCameraFill,
  BsFillCollectionFill,
  BsFillHeartFill,
  BsSearch,
} from "react-icons/Bs";
import ModeBtns from "./ModeBtns"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const location = router.pathname;

  const handleSearch = (event: { preventDefault: () => void; }) => {
    const searchType = location === "/collections" ? "collections" : "photos";
    const numberOfItems = location === "/collections" ? 11 : 30;

    event.preventDefault();
    router.push(`search/${searchType}?client_id=${API_KEY}&query=${searchTerm}&per_page=${numberOfItems}`);
  };
//icons
  return (
    <header className="my-6">
      <nav className="flex">
        <div className="flex items-center space-x-2 transition md:w-3/4 md:p-1 md:space-x-6">
          <Link href="/" className='icons'>
            <BsCameraFill size={20} />
            <span>Gallery</span>
          </Link>
          <form className="w-full flex items-center space-x-2 py-1 px-4 rounded-lg shadow-sm bg-gray-100 text-gray-500" onSubmit={handleSearch}>
            <BsSearch size={23} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 focus:outline-none bg-transparent"
            />
          </form>
        </div>
        <div className="flex items-center justify-end space-x-2 md:w-1/4 md:space-x-4 lg:space-x-6">
          <Link href="/collections" className='icons'>
            <BsFillCollectionFill size={20} />
            <span>Collections</span>
          </Link>
          <Link href="/randomPhotos" className="icons">
            <BsFillHeartFill size={20} />
            <span>random</span>
          </Link>
          <ModeBtns />
        </div>
      </nav>
    </header>
  );
}
