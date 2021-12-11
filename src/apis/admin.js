import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')


export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    create(formData) {
      return apiHelper.post('/admin/categories', formData, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    update(categoryId, formData) {
      return apiHelper.put(`/admin/categories/${categoryId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  },
  restaurants: {
    create(formData) {
      return apiHelper.post('/admin/restaurants', formData, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    getRestaurants() {
      return apiHelper.get('/admin/restaurants', { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    deleteRestaurant(restaurantId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`,
        { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    getSingleRestaurant(restaurantId) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`,
        { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    updateSingleRestaurant(restaurantId, formData) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData,
        { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users', { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    update(userId, formData) {
      return apiHelper.put(`/admin/users/${userId}`, formData, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  }
}