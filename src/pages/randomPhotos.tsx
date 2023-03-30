import requests from "../utils/requests";
import { PhotoList, SinglePhoto } from "../../typings";
import Layout from "@/components/Layout";
import RandomPhoto from "@/components/RandomPhoto";

interface Props {
  randomPhotos: PhotoList;
}

export default function RandomPhotos({ randomPhotos }: Props) {
  console.log(randomPhotos);
  return (
    <Layout title="random-photos">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-[200px]">
        {randomPhotos?.map((photo: SinglePhoto) => {
          return <RandomPhoto key={photo.id} photo={photo} />;
        })}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${requests.fetchRandomPhotos}`);
  const RandomPhotos = await res.json();

  return {
    props: {
      randomPhotos: RandomPhotos,
    },
  };
};
