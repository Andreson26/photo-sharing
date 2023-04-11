import Layout from "@/components/Layout";
import PhotoItem from "@/components/PhotoItem";
import requests from "@/utils/requests";
import { PhotoList, Photo, SinglePhoto } from "../../typings";

interface Props {
  fetchPhotos: PhotoList;
 // photo: Photo

}

export default function Home({ fetchPhotos }: Props) {
  const columns: SinglePhoto[][] = [[], [], [], []];

  fetchPhotos.forEach((photo, index) =>{
     columns[index % 4].push(photo);
  })
  
  return (
    <Layout title="home-page">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mx-[100px]">
  {columns.map((column, ndex) => {
    return (
      <div key={ndex}>
        {column.map((photo) => (
         <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    );
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

