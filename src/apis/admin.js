import { apiHelper } from '../utils/helpers.js'
const token = localStorage.getItem("token")


export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', { headers: { Authorization: `Bearer ${token}` } })
    },
    create(formData) {
      return apiHelper.post('/admin/categories', formData, { headers: { Authorization: `Bearer ${token}` } })
    },
    update(categoryId, formData) {
      return apiHelper.put(`/admin/categories/${categoryId}`, formData, { headers: { Authorization: `Bearer ${token}` } })
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, { headers: { Authorization: `Bearer ${token}` } })
    }
  },
  restaurants: {
    create(formData) {
      return apiHelper.post('/admin/restaurants', formData, { headers: { Authorization: `Bearer ${token}` } })
    },
    getRestaurants() {
      return apiHelper.get('/admin/restaurants', { headers: { Authorization: `Bearer ${token}` } })
    },
    deleteRestaurant(restaurantId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`,
        { headers: { Authorization: `Bearer ${token}` } })
    },
    getSingleRestaurant(restaurantId) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`,
        { headers: { Authorization: `Bearer ${token}` } })
    },
    updateSingleRestaurant(restaurantId, formData) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData,
        { headers: { Authorization: `Bearer ${token}` } })
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users', { headers: { Authorization: `Bearer ${token}` } })
    },
    update(userId, formData) {
      return apiHelper.put(`/admin/users/${userId}`, formData, { headers: { Authorization: `Bearer ${token}` } })
    }
  }
}