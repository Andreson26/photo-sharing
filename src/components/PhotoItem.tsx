import { Photo } from "../../typings";
import Link from "next/link";
import { pluralSingular } from "@/utils/utilities";
import { AiFillHeart } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

interface PhotoItemProps {
  photo: Photo;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
  return (
    <div className="relative cursor-pointer">
      <Link href={`/photo/${photo.id}`}>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          className=" rounded shadow object-cover h-64 w-full"
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
          <div className="text-center">
            <p>{pluralSingular(photo.likes)}</p>
          </div>
          <div className="flex space-x-1">
            <RxAvatar size={30} />
            <p className="font-bold">{photo.user.username}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
//hoverable absolute inset-0
