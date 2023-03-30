import { Collection } from "../../typings";
import Link from "next/link";

interface Props {
  collection: Collection;
}

export default function CollectionItem({ collection }: Props) {
  return (
    <div className=" relative cursor-pointer">
      <Link href={`/collection/${collection.id}`}>
        <p>
          <img
            src={collection.cover_photo.urls.regular}
            alt={collection.cover_photo.alt_description}
            className="rounded shadow object-cover h-80 w-full"
          />
        </p>
        <p className="hoverable text-center">
          {collection.total_photos} photos
        </p>
      </Link>
    </div>
  );
}
