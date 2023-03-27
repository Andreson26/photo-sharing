const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.unsplash.com'

const requests = {
    fetchPhotos: `${BASE_URL}/photos?client_id=${API_KEY}&per_page=20`,
    collections: `${BASE_URL}/collections?client_id=${API_KEY}&per_page=20`,
}
export default requests