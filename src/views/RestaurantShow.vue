<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
      
      <RestaurantDetail  
       :initialrestaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
     <restaurantComments   
     :restaurantComments="restaurantComments"
    v-on:after-delete-comment="afterDeleteComment"/>

    <!-- 新增評論 CreateComment -->
    <CreateComment 
    :restaurantId=restaurant.id 
    v-on:after-create-comment="afterCreateComment" />
  </div>
</template>

<script>

import RestaurantDetail from '../components/RestaurantDetail.vue'
import restaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'


const dummyData = {  
    restaurant: {
        "id": 1,
        "name": "Edward Hilll",
        "tel": "413.636.0923",
        "address": "065 Farrell Pines",
        "opening_hours": "08:00",
        "description": "non minus quos",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.905510757708793",
        "viewCounts": 1,
        "createdAt": "2021-11-10T11:38:07.000Z",
        "updatedAt": "2021-11-11T10:59:08.845Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 1,
                "text": "Expedita optio sint aut.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$ZcshVCQ1K9jdlXi.2QZZwOqkXcdhd0e1GJNOsZ4iLv3Fgj52W8TTK",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z"
                }
            },
            {
                "id": 51,
                "text": "Ipsum quisquam quia sed voluptatem voluptatibus.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$6RuJwqrtZ7vF2rizwfA.Ven9qw4ow5YQafa0frnBwsMYdHzjox2Oe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z"
                }
            },
            {
                "id": 101,
                "text": "Voluptatum similique voluptatem.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$6RuJwqrtZ7vF2rizwfA.Ven9qw4ow5YQafa0frnBwsMYdHzjox2Oe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default{
    components:{
    RestaurantDetail:RestaurantDetail,
    restaurantComments:restaurantComments,
    CreateComment:CreateComment
    },    
    data(){
      return{
          restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser:dummyUser.currentUser
    }
    },
    methods:{
      fetchRestaurant(restaurantId){
        console.log('fetchRestaurant id: ', restaurantId)

        this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }
      this.restaurantComments = dummyData.restaurant.Comments
      },
      afterDeleteComment(id){
        this.restaurantComments=this.restaurantComments.filter(item=>item.id!==id)        
      },
      afterCreateComment(payload){
       const { commentId, restaurantId, text } = payload
       
       this.restaurantComments.push(
         {
          id:commentId,
          text:text,
          RestaurantId:restaurantId,
          createdAt:new Date(),
          User:{
            id:this.currentUser.id,
            name:this.currentUser.name
          }
         }
       )
      }

    },
    created(){
      const restaurantId=this.$route.params.id

      this.fetchRestaurant(restaurantId)      
    }
      
    }




</script>