import axios from "axios";


export default async function handler(req: { body: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
  const { searchTerm } = JSON.parse(req.body);
  const API_KEY = process.env.API_KEY;
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${API_KEY}`
  );
  const photos = response.data.results.map((result: { id: any; urls: any; }) => ({
    id: result.id,
    urls: result.urls,
  }));
  res.status(200).json(photos);
}