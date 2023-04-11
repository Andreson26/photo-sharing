import React, {useState, useEffect} from "react";
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

export default function PhotoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [photoDetail, setPhotoDetail] = useState<SinglePhoto | null>(null);

  useEffect(() => {
    async function fetchPhotoDetail() {
      const res = await fetch(
        `https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`
      );
      const data = await res.json();
      setPhotoDetail(data);
    }
    if(id) {
      fetchPhotoDetail();
    }
  }, [id]);

  const backToPreviousPage = () => {
    router.back();
  }

  if (!photoDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={photoDetail.alt_description}>
      <div className="bg-gray-300 p-2 md:mx-auto rounded dark:bg-gray-700 md:p-4 lg:w-[900px]">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <img
              src={photoDetail.user.profile_image.medium}
              alt={photoDetail.alt_description}
              className="rounded"
            />
            <div>
              <p className="text-base font-extrabold">{photoDetail.user.username}</p>
              <p className="text-sm font-light">
                {capitalize(photoDetail.alt_description)}
              </p>
              <span className="text-xs font-light">
                {timeAgo(photoDetail.created_at)} ago
              </span>
            </div>
          </div>
          <ImCross size={20} className="text-red-500 cursor-pointer" onClick={backToPreviousPage} />
        </div>
        <div className="my-4">
          <img
            src={photoDetail.urls.regular}
            alt={photoDetail.alt_description}
            className="rounded h-[500px] w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <FcLike size={30} />
            <span className="font-light">{photoDetail.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">views:</p>
            <span className="font-light">{photoDetail.views}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-bold">Updated:</p>
            <span className="font-ligh">{timeAgo(photoDetail.updated_at)}</span>
          </div>
        </div>
  </div>
    </Layout>
  );
}

/*export const getServerSideProps = async (context: { query: { id: any } }) => {

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
};*/

//getServerSideProp()
