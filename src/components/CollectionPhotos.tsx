import { Photo } from "../../typings";
import Link from "next/link";
import { pluralSingular } from "@/utils/utilities";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Props {
  collectionPhoto: Photo;
}

export default function CollectionPhotos({ collectionPhoto }: Props) {
  return (
    <Link href={`/photo/${collectionPhoto.id}`} className="relative rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out">
      <p>
        <img
          src={collectionPhoto.urls.regular}
          alt={collectionPhoto.alt_description}
          className="rounded object-cover layout-fill mb-4"
        />
      </p>
      <p className="hoverable text-center">
        {pluralSingular(collectionPhoto.likes)}
      </p>
    </Link>
  );
}
