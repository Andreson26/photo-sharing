import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SingleCollection, PhotoList, SinglePhoto } from "../../../typings";
import Layout from "@/components/Layout";
import CollectionPhotos from "@/components/CollectionPhotos";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Props {
  collection: SingleCollection;
}

interface Props {
  collectionPhotos: PhotoList;
}

export default function CollectionDetaill() {
  const [collectionDetail, setCollectionDetail] =
    useState<SingleCollection | null>(null);
  const [collectionPhotos, setCollectionPhotos] = useState<PhotoList | null>(
    null
  );
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchCollectionDetail() {
      const [collectionDetail, collectionPhotos] = await Promise.all([
        fetch(
          `https://api.unsplash.com/collections/${id}?client_id=${API_KEY}`
        ).then((res) => res.json()),
        fetch(
          `https://api.unsplash.com/collections/${id}/photos?client_id=${API_KEY}&per_page=30`
        ).then((res) => res.json()),
      ]);
      setCollectionDetail(collectionDetail);
      setCollectionPhotos(collectionPhotos);
    }
    if (id) {
      fetchCollectionDetail();
    }
  }, [id]);

  function handleFollow() {
    setIsFollowing(true);
  }

  function handleUnfollow() {
    setIsFollowing(false);
  }

  if (!collectionDetail || !collectionPhotos) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={collectionDetail.title}>
      <div className="bg-gray-300 p-2 md:mx-auto rounded dark:bg-gray-700 md:p-4 lg:w-[900px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={collectionDetail?.user.profile_image.medium}
              alt=""
              className="rounded"
            />
            <div>
              <p className="text-base font-extrabold">
                {collectionDetail.user.username}
              </p>
              <p className="text-sm font-light">{collectionDetail.title}</p>
              <span className="text-xs font-light">
                {collectionDetail.total_photos} photos found in that collection
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-light">
              {collectionDetail.user.total_collections} total collections
            </p>
            <p className="text-sm font-light">
              {collectionDetail.user.total_likes} total likes
            </p>

            {isFollowing ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base"
                onClick={handleUnfollow}
              >
                unFollow
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base"
                onClick={handleFollow}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {collectionPhotos.map((collectionPhoto: SinglePhoto) => (
            <CollectionPhotos
              key={collectionPhoto.id}
              collectionPhoto={collectionPhoto}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

/*export const getServerSideProps = async (context: { query: { id: any; }; }) => {
    const { id } = context.query;

    try {
        const res = await fetch(
          `https://api.unsplash.com/collections/${id}/photos?client_id=${API_KEY}`
        );
        const collectionPhotos = await res.json();
    
        if (collectionPhotos && collectionPhotos.errors) {
          throw new Error(collectionPhotos.errors);
        }
    
        return {
          props: {
            collectionPhotos: collectionPhotos,
          },
        };
      } catch (error) {
        console.error(error);
        return {
          notFound: true,
        };
      }
}*/
