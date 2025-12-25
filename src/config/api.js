const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://travel-app-backend-jrcu.onrender.com';

export const API_ENDPOINTS = {
  // Hotels
  getAllHotels: `${API_BASE_URL}/api/hotels`,
  getHotelsByCategory: (category) => `${API_BASE_URL}/api/hotels?category=${category}`,
  getSingleHotel: (id) => `${API_BASE_URL}/api/hotels/${id}`,
  
  // Categories
  getCategories: () => `${API_BASE_URL}/api/category`,
  
  // Auth
  register: `${API_BASE_URL}/api/auth/register`,
  login: `${API_BASE_URL}/api/auth/login`,
  
  // Wishlist
  wishlist: `${API_BASE_URL}/api/wishlist`,
  deleteWishlistItem: (id) => `${API_BASE_URL}/api/wishlist/${id}`,
};

export default API_BASE_URL;