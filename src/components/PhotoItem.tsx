import { Photo } from "../../typings";
import Link from "next/link";
import { likeCount } from "@/utils/utilities";

interface PhotoItemProps {
    photo: Photo;
}

export default function PhotoItem({ photo }: PhotoItemProps) {
  return (
<div className="group relative cursor-pointer">
    <Link href={`/photo/${photo.id}`}>
        <p>
            <img src={photo.urls.regular} alt={photo.alt_description}  className="rounded shadow object-cover h-64 w-full"/>
        </p>
        <p className="hoverable absolute inset-0">{likeCount(photo.likes)}</p>
    </Link>
   
</div>
  )
}
