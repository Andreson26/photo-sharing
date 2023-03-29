import React from "react";
import { useRouter } from "next/router";
import { PhotoList } from "../../typings";
import requests from "@/utils/requests";
import Layout from "@/components/Layout";
import CollectionItem from "@/components/CollectionItem";
import { CollectionList, SingleCollection } from "../../typings";

interface Props {
  fetchCollections: CollectionList;
}

export default function Collections({ fetchCollections }: Props) {
  console.log(fetchCollections.slice(3))

  return (
    <Layout title="collections-page">
      <div className="flex flex-col items-center justify-center lg:mx-[200px]">
        <h1 className="text-sm font-bold text-gray-500 mb-12">
          Here are some recommended collections for you
        </h1>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-12 ">
          {fetchCollections.slice(3).map((collection: SingleCollection) => {
            return (
              <CollectionItem key={collection.id} collection={collection} />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(`${requests.fetchCollections}`);
  const data = await response.json();
  return {
    props: {
      fetchCollections: data,
    },
  };
};
