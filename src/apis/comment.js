import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')



export default {

    create(formData) {
        return apiHelper.post('/comments', formData, { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    delete(commentId) {
        return apiHelper.delete(`/comments/${commentId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }

}