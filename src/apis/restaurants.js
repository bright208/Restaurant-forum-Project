import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')




export default {
  getRestaurant(restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getRestaurants(data) {
    const searchParams = new URLSearchParams(data)
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: ` Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', { headers: { Authorization: `Bearer ${getToken()}` } })
  }
}