import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  BsCameraFill,
  BsFillCollectionFill,
  BsFillHeartFill,
  BsSearch,
} from "react-icons/bs";
import ModeBtns from "./ModeBtns";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const location = router.pathname;
  const { redirect } = router.query;

  const handleSearch = (event: { preventDefault: () => void; }) => {
    const searchType =
      location === "/collections" && "/search/collections"
        ? "collections"
        : "photos";
    const numberOfItems =
      location === "/collections" && "/search/collections" ? 11 : 30;
    const url = `/search/${searchType}?client_id=${API_KEY}&query=${searchTerm}&per_page=${numberOfItems}`;

    event.preventDefault();
    router.push(`${url}/?redirect=${redirect}`);
  };

  return (
    <header className="my-6 px-4">
      <nav className="flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-6">
          <Link href="/" className="icons flex items-center space-x-1">
            <BsCameraFill size={20} />
            <span className="hidden sm:inline">Gallery</span>
          </Link>
          <form
            className="flex items-center space-x-2 py-1 px-4 rounded-lg shadow-sm bg-gray-100 text-gray-500 flex-grow"
            onSubmit={handleSearch}
          >
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
        <div className="flex flex-col items-center space-x-2 md:flex-row md:space-x-4 lg:space-x-6 mt-4 md:mt-0">
          <Link href="/collections" className="icons flex items-center space-x-1">
            <BsFillCollectionFill size={20} />
            <span className="hidden sm:inline">Collections</span>
          </Link>
          <Link href="/randomPhotos" className="icons flex items-center space-x-1">
            <BsFillHeartFill size={20} />
            <span className="hidden sm:inline">Random</span>
          </Link>
          <ModeBtns />
        </div>
      </nav>
    </header>
  );
}

