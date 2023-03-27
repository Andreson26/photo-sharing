import Layout from "@/components/Layout";
import PhotoItem from "@/components/PhotoItem";
import requests from "@/utils/requests";
import { PhotoList, SinglePhoto } from "../../typings";

interface Props {
  fetchPhotos: PhotoList;
  collections: PhotoList;
}

export default function Home({ fetchPhotos, collections }: Props) {
  
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
  const [fetchPhotos, collections] = await Promise.all([
    fetch(requests.fetchPhotos).then((res) => res.json()),
    fetch(requests.collections).then((res) => res.json()),
  ]);

  return {
    props: {
      fetchPhotos,
      collections,
     
    },
  };
};
