import { apiHelper } from '../utils/helpers.js'
const token = localStorage.getItem("token")


export default {
  editUser(userId, formData) {
    return apiHelper.put(`/users/${userId}`, formData, { headers: { Authorization: `Bearer ${token}` } })
  },
  getCurrentUser() {
    return apiHelper.get('/get_current_user', { headers: { Authorization: `Bearer ${token}` } })
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
  },
  addFavorite(restaurantId) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, { headers: { Authorization: `Bearer ${token}` } })

  },
  deleteFavorite(restaurantId) {
    return apiHelper.delete(`/favorite/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
  },
  addLike(restaurantId) {
    return apiHelper.post(`/like/${restaurantId}`, null, { headers: { Authorization: `Bearer ${token}` } })
  },
  deleteLike(restaurantId) {
    return apiHelper.delete(`/like/${restaurantId}`, { headers: { Authorization: `Bearer ${token}` } })
  },
  getTopUsers() {
    return apiHelper.get('/users/top', { headers: { Authorization: `Bearer ${token}` } })
  },
  addFollowing(userId) {
    return apiHelper.post(`/following/${userId}`, null, { headers: { Authorization: `Bearer ${token}` } })
  },
  deleteFollowing(userId) {
    return apiHelper.delete(`/following/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
  }
}

