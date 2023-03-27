import React from "react";
import { useRouter } from "next/router";
import { FcLike } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import { SinglePhoto } from "../../../typings";
import { capitalize, timeAgo } from "@/utils/utilities";
import Layout from "@/components/Layout";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface Props {
  photo: SinglePhoto;
}

export default function photoDetail({ photo }: Props) {
  const router = useRouter();

  const handleClicked = () => {
    router.push("/");
  };

  return (
    <Layout title={photo.alt_description}>
      <div className="bg-gray-300 p-2 md:mx-auto rounded dark:bg-gray-700 md:p-4 lg:w-[900px]">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <img
              src={photo.user.profile_image.medium}
              alt={photo.alt_description}
              className="rounded"
            />
            <div>
              <p className="text-base font-extrabold">{photo.user.username}</p>
              <p className="text-sm font-light">
                {capitalize(photo?.alt_description)}
              </p>
              <span className="text-xs font-light">
                {timeAgo(photo.created_at)} ago
              </span>
            </div>
          </div>
          <ImCross size={20} className="text-red-500 cursor-pointer" onClick={handleClicked} />
        </div>
        <div className="my-4">
          <img
            src={photo.urls.regular}
            alt={photo.alt_description}
            className="rounded h-[500px] w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <FcLike size={30} />
            <span className="font-light">{photo.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">views:</p>
            <span className="font-light">{photo.views}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">Updated:</p>
            <span className="font-ligh">{timeAgo(photo.updated_at)}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context: { query: { id: any } }) => {

  const id = context.query.id;
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
    );
    console.log(res);
    const photo = await res.json();

    if (photo && photo.errors) {
      throw new Error(photo.errors);
    }

    return {
      props: {
        photo: photo,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

//getServerSideProp()
