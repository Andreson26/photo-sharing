import { Photo } from "../../typings";
import Link from "next/link";
import { likeCount } from "@/utils/utilities";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Props {
    collectionPhoto: Photo
}

export default function CollectionPhotos({collectionPhoto}: Props) {
    
   //console.log(collectionPhoto)
  return (
    <div className="group relative cursor-pointer">
    <Link href={`/photo/${collectionPhoto.id}`}>
        <p>
            <img src={collectionPhoto.urls.regular} alt={collectionPhoto.alt_description}  className="rounded shadow object-cover h-64 w-full"/>
        </p>
        <p className="hoverable absolute inset-0">{likeCount(collectionPhoto.likes)}</p>
    </Link>
   
</div>

  )
}


