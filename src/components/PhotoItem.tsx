import { SinglePhoto } from "../../typings";
import Link from "next/link";
import internal from "stream";
import { pluralSingular } from "@/utils/utilities";
import { capitalize } from "@/utils/utilities";
import { AiFillHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

interface PhotoItemProps {
  photo: SinglePhoto;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
  
  return (
    <Link
      href={`/photo/${photo.id}`}
      className='relative rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out'
    >
      <img
        src={photo.urls.regular}
        alt={photo.alt_description}
        className= "rounded object-cover layout-fill mb-4 "
      />
      <div className="hoverable">
        <div className="flex justify-end space-x-1">
          <div className="iconsPhoto">
            <AiFillHeart size={20} />
          </div>
          <div className="iconsPhoto">
            <IoMdAdd size={20} />
          </div>
        </div>
        <div className="text-center text-2xl font-semibold">
          <p>{pluralSingular(photo.likes)}</p>
        </div>
        <div className="flex space-x-1">
          <RxAvatar size={30} />
          <p className="text-lg font-bold">{photo.user.username}</p>
        </div>
      </div>
    </Link>
  );
}
