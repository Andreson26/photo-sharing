import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SearchResult, PhotoResult } from "../../../../typings";
import Layout from "@/components/Layout";
import PhotoItem from "@/components/PhotoItem";

export default function Photos() {
  const [searchPhotos, setSearchPhotos] = useState<SearchResult | null>(null);

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    const queryString = Object.keys(query)
      .map((key) => key + "=" + query[key])
      .join("&");

    async function fetchSearchPhotos() {
      const searchPhotos = await fetch(
        `https://api.unsplash.com/search/photos?${queryString}`
      ).then((res) => res.json());
      setSearchPhotos(searchPhotos);
    }
    if (queryString) {
      fetchSearchPhotos();
    }
  }, [query]);
  if (!searchPhotos) {
    return <div>Loading...</div>;
  }

  const columns: PhotoResult[][] = [[], [], [], []];

  searchPhotos.results.forEach((photo, index) => {
    columns[index % 4].push(photo);
  });

  return (
    <Layout title={query.query}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:mx-[100px]">
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
