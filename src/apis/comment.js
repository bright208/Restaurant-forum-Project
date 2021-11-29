import { apiHelper } from '../utils/helpers.js'
const token = localStorage.getItem("token")


export default {

    create(formData) {
        return apiHelper.post('/comments', formData, { headers: { Authorization: `Bearer ${token}` } })
    },
    delete(commentId) {
        return apiHelper.delete(`/comments/${commentId}`, { headers: { Authorization: `Bearer ${token}` } })
    }

}