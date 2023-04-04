import CollectionItem from "@/components/CollectionItem";
import Layout from "@/components/Layout";
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { SearchResult, PhotoResult} from "../../../../typings"


export default function SearchCollections() {
    const [searchCollections, setSearchCollections] = useState<SearchResult | null>(null);
    const router = useRouter()
    const  query  = router.query
    console.log(query)
    
   useEffect(() => {
    const queryString = Object.keys(query)
    .map((key) => key + "=" + query[key])
    .join("&");
        async function fetchSearchCollections() {
            const searchCollections = await fetch(
                `https://api.unsplash.com/search/collections?${queryString}}`
            ).then((res) => res.json());
            setSearchCollections(searchCollections);
        }
        if (queryString) {
            fetchSearchCollections();
        }
    }, [query]);
    if (!searchCollections) {
        return <div>Loading...</div>;
    }
    console.log(searchCollections);
  return (
    <Layout title={query.query}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:mx-[200px]">
            {searchCollections.results.map((collection: PhotoResult) => {
                return <CollectionItem key={collection.id} collection={collection} />;
            })}
        </div>
    </Layout>
  )
}
