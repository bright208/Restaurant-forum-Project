<template>
  <div class="container py-5">
  <NavTabs/>
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <div
      v-for="restaurant in restaurants" :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link 
          :to="{name:'restaurant-show',params:{id:restaurant.id}}">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
             :to="{name:'restaurant-show',params:{id:restaurant.id}}"
             class="btn btn-primary mr-2">Show
            </router-link>
            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              v-on:click="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              v-on:click="addToFavorite(restaurant)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavTabs from '../components/NavTabs.vue'

const dummyData={
    restaurants: [
        {
            "id": 50,
            "name": "Maureen Bernier",
            "tel": "818.719.5768",
            "address": "305 Kelton Pine",
            "opening_hours": "08:00",
            "description": "Ipsam quidem quia dolor accusantium temporibus.\nCo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.68197191856002",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Libbie Vandervort",
            "tel": "(435) 838-5011 x20584",
            "address": "8572 Kunze Crest",
            "opening_hours": "08:00",
            "description": "Voluptates expedita maiores nam eius unde sit. Ver",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.84148021721207",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Breanne Gislason",
            "tel": "485-513-1116 x2248",
            "address": "4353 Benton Greens",
            "opening_hours": "08:00",
            "description": "Tempora ut veritatis perferendis assumenda quis en",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.11532797060588",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Lucinda Kihn",
            "tel": "917.184.2728",
            "address": "738 Tamia Burgs",
            "opening_hours": "08:00",
            "description": "at",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.497155371050508",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Miss Clint Maggio",
            "tel": "301.203.3991",
            "address": "18878 Casandra Point",
            "opening_hours": "08:00",
            "description": "Maxime explicabo atque consequatur in.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.152468093678976",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Elouise Becker",
            "tel": "505.324.5861 x360",
            "address": "1582 Elta Meadow",
            "opening_hours": "08:00",
            "description": "Vero natus similique reprehenderit quos. Autem ips",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.144648518764996",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Orion Lehner",
            "tel": "157-096-0279",
            "address": "090 Cremin Isle",
            "opening_hours": "08:00",
            "description": "alias aliquam dolore",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=50.192100517339796",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Brennan Price",
            "tel": "028-532-2884",
            "address": "1091 Turcotte Divide",
            "opening_hours": "08:00",
            "description": "Asperiores omnis beatae esse et eveniet numquam.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.825065274946397",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Brielle Brakus",
            "tel": "809-933-2792 x8153",
            "address": "822 Gorczany Walks",
            "opening_hours": "08:00",
            "description": "Ut nam voluptas. Temporibus tenetur expedita saepe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.62976762746672",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Sydni Labadie",
            "tel": "361.237.6193 x735",
            "address": "21285 Gleichner Plains",
            "opening_hours": "08:00",
            "description": "Quia suscipit voluptas magnam excepturi.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.11524619620847",
            "viewCounts": 0,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
   components:{
   NavTabs:NavTabs
   },

   data(){     
     return{
       restaurants:dummyData.restaurants
     }
   },
   methods:{
    addToFavorite(restaurant){
      restaurant.isFavorited=true
    },
    deleteFavorite(restaurant){
      restaurant.isFavorited=false
    }
   }
}

</script>