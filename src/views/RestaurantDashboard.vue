<template>
  <div class="container py-5">
    <div>
      <h1>{{restaurant.name}}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{restaurant.Category.name}}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數：{{restaurant.Comments.length}} </li>
      <li>瀏覽次數：{{restaurant.viewCounts}} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>


<script>

const dummyData={
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
        "updatedAt": "2021-11-11T10:59:08.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z"
        },
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
    }
}

export default{

   data(){
     return{
      restaurant:dummyData.restaurant
     }
   }
}

</script>
