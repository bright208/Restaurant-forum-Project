<template>
  <div class="container py-5">
  <NavTabs/>
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initialrestaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->

    <RestaurantsPagination
    :currentPage="currentPage"
    :totalPage="totalPage"
    :previousPage="previousPage"
    :nextPage="nextPage"
    :categoryId="categoryId"
     />
  </div>
</template>

<script>

import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'

const dummyData={
    restaurants: [
        {
            "id": 1,
            "name": "Edward Hilll",
            "tel": "413.636.0923",
            "address": "065 Farrell Pines",
            "opening_hours": "08:00",
            "description": "non minus quos",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.905510757708793",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Kylee MacGyver",
            "tel": "1-461-395-1243 x011",
            "address": "266 Rutherford Square",
            "opening_hours": "08:00",
            "description": "Quaerat aut ut dolores id et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.707777983888143",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Seth Hand",
            "tel": "1-125-578-9939 x20329",
            "address": "018 Hilpert Points",
            "opening_hours": "08:00",
            "description": "soluta distinctio tenetur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.009199291362364",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Cortez Senger",
            "tel": "323-118-2304",
            "address": "54555 Dietrich Plains",
            "opening_hours": "08:00",
            "description": "Id est tenetur cupiditate officia.\nUt quod quas se",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.82794681381363",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mateo Auer",
            "tel": "1-883-210-2165",
            "address": "996 Murray Plaza",
            "opening_hours": "08:00",
            "description": "eligendi aut quaerat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.1138826983906336",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Scarlett Zboncak",
            "tel": "(157) 653-7068 x261",
            "address": "4658 Santa Junction",
            "opening_hours": "08:00",
            "description": "Quam sit reprehenderit dolorem est. Sed eos accusa",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.617444287853324",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Yolanda Homenick",
            "tel": "(564) 319-1210",
            "address": "9855 Stewart Gateway",
            "opening_hours": "08:00",
            "description": "Minima et sit enim. Sed qui deleniti ad. Aut ipsam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.74348318306738",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Vernice Hackett",
            "tel": "683.054.2136 x9584",
            "address": "028 Don Expressway",
            "opening_hours": "08:00",
            "description": "Perspiciatis aut unde molestiae modi ducimus velit",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.437571145415383",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Javier Hamill",
            "tel": "458.805.3652 x84844",
            "address": "5038 Madison Key",
            "opening_hours": "08:00",
            "description": "expedita dolorem dolor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.146894379903564",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Aliyah Okuneva",
            "tel": "1-158-383-7572",
            "address": "643 Beatty Trail",
            "opening_hours": "08:00",
            "description": "Dolorem amet velit maxime ipsam sunt iure.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.59423900838964",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    categories: [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
    
    data(){
   
        return{
     restaurants:[],
     categories:[],
     categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

     }
    },
   components:{
   NavTabs:NavTabs,
   RestaurantCard:RestaurantCard,
   RestaurantsNavPills:RestaurantsNavPills,
   RestaurantsPagination:RestaurantsPagination
   },
   methods:{
    
    fetchRestaurants(){
    this.restaurants=dummyData.restaurants
    this.categories=dummyData.categories
    this.categoryId=dummyData.categoryId
    this.currentPage=dummyData.page
    this.totalPage=dummyData.totalPage
    this.previousPage=dummyData.prev
    this.nextPage=dummyData.next
    }
   },
   created(){
   this.fetchRestaurants()
   }
}

</script>