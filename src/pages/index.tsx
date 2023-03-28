import Layout from "@/components/Layout";
import PhotoItem from "@/components/PhotoItem";
import requests from "@/utils/requests";
import { PhotoList, SinglePhoto } from "../../typings";

interface Props {
  fetchPhotos: PhotoList;
}

export default function Home({ fetchPhotos }: Props) {
  
  return (
    <Layout title="home-page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {fetchPhotos?.map((photo: SinglePhoto) => {
          return <PhotoItem key={photo.id} photo={photo} />;
        })}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `${requests.fetchPhotos}`
  );
  const data = await res.json();

  return {
    props: {
      fetchPhotos: data,
    },

  };
};
