import { apiHelper } from '../utils/helpers.js'
const token = localStorage.getItem("token")



export default {

  getRestaurants({ page, categoryId }) {

    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: ` Bearer ${token}` }})
  },

  getFeeds() {
    return apiHelper.get('/restaurants/feeds', { headers: { Authorization: `Bearer ${token}` } })
  },
  getTopRestaurants(){
   return apiHelper.get('/restaurants/top', { headers: { Authorization: `Bearer ${token}` } })
  }
}