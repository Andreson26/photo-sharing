const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.unsplash.com'

const requests = {
    fetchPhotos: `${BASE_URL}/photos?client_id=${API_KEY}&per_page=40`,
    fetchPhoto: `${BASE_URL}/photos/:id=FHTTNcwjMEw?client_id=${API_KEY}`,
    fetchCollections: `${BASE_URL}/collections?client_id=${API_KEY}&per_page=11`,
    fetchRandomPhotos: `${BASE_URL}/photos/random?client_id=${API_KEY}&count=4`,    
    fetchSearchPhotos: `${BASE_URL}/search/photos?client_id=${API_KEY}&per_page=40&query=`,
    fetchSearchCollections: `${BASE_URL}/search/collections?client_id=${API_KEY}&per_page=11&query=`,
}

export default requests