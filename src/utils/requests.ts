const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.unsplash.com'

const requests = {
    fetchPhotos: `${BASE_URL}/photos?client_id=${API_KEY}&per_page=20`,
    fetchPhoto: `${BASE_URL}/photos/:id=FHTTNcwjMEw?client_id=${API_KEY}`,
    collections: `${BASE_URL}/collections?client_id=${API_KEY}&per_page=20`,
}

console.log(requests.fetchPhoto)
export default requests