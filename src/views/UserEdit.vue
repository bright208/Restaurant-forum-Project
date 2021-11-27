<template>
  <div class="container py-5">
    <form v-on:submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="profile.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img :src="profile.image" width="200px" height="200px" class="d-block" v-if="profile.image">
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          v-on:change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>

const dummyData={
    "profile": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$ZcshVCQ1K9jdlXi.2QZZwOqkXcdhd0e1GJNOsZ4iLv3Fgj52W8TTK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2021-11-10T11:38:07.000Z",
        "updatedAt": "2021-11-10T11:38:07.000Z",
        "Comments": [
            {
                "id": 1,
                "text": "Expedita optio sint aut.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 4,
                "text": "Sapiente est quia voluptas eveniet fuga.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 4,
                    "name": "Cortez Senger",
                    "tel": "323-118-2304",
                    "address": "54555 Dietrich Plains",
                    "opening_hours": "08:00",
                    "description": "Id est tenetur cupiditate officia.\nUt quod quas sed.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.82794681381363",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 5,
                "text": "Quia voluptatem occaecati commodi.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 8,
                "text": "Id minus rerum aspernatur ut.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 8,
                    "name": "Vernice Hackett",
                    "tel": "683.054.2136 x9584",
                    "address": "028 Don Expressway",
                    "opening_hours": "08:00",
                    "description": "Perspiciatis aut unde molestiae modi ducimus velit deserunt.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.437571145415383",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 9,
                "text": "Vel esse sapiente culpa alias mollitia.",
                "UserId": 1,
                "RestaurantId": 9,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 10,
                "text": "Rerum enim reiciendis excepturi eum ut porro non et unde.",
                "UserId": 1,
                "RestaurantId": 10,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 11,
                "text": "Consequuntur non sit totam fugit voluptatem suscipit.",
                "UserId": 1,
                "RestaurantId": 11,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 11,
                    "name": "Mr. Angelina McCullough",
                    "tel": "573-551-3422 x904",
                    "address": "489 Rath Via",
                    "opening_hours": "08:00",
                    "description": "possimus",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.8366267694972",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 20,
                "text": "Sunt dolorum ad consequuntur tempora tempore.",
                "UserId": 1,
                "RestaurantId": 20,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 20,
                    "name": "Brook Crona",
                    "tel": "439-098-0874",
                    "address": "678 Steuber Haven",
                    "opening_hours": "08:00",
                    "description": "ut quasi et",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.76226984163999",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 24,
                "text": "Ea non quos esse molestias doloremque reprehenderit aut.",
                "UserId": 1,
                "RestaurantId": 24,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 24,
                    "name": "Vada Greenholt",
                    "tel": "(806) 671-1302 x001",
                    "address": "31810 Corbin Stravenue",
                    "opening_hours": "08:00",
                    "description": "In autem voluptatem ut saepe asperiores culpa quo voluptas. Et illo hic. Voluptatem deleniti et.\n \rEst inventore qui quo dicta a voluptas. Amet expedita sunt dolores fuga est. Ab iure magni quam deleniti. Omnis veniam mollitia autem sint est velit veritatis culpa. Atque dolor autem dolorem cupiditate et eaque rem. Aut sunt quo iure nihil omnis iusto quis delectus.\n \rTempora reiciendis eligendi illo quo. Esse est pariatur aliquid neque numquam iure aut possimus. Aliquam consequatur odio expedita voluptates est. Provident minima sit placeat rerum ut vero corrupti ex. Et molestias aut minima.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.340428236941154",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 27,
                "text": "Rerum ab et doloribus eius vel consectetur cum.",
                "UserId": 1,
                "RestaurantId": 27,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 27,
                    "name": "Quinten Weber",
                    "tel": "1-793-424-4248",
                    "address": "44514 Nicklaus Trafficway",
                    "opening_hours": "08:00",
                    "description": "Et ut ad eum aliquid nesciunt ipsam est neque. Dolorem laudantium maxime non non sequi. Ut aut et voluptas nobis fugiat aut et magni. Quaerat sit soluta sit tempora ad nulla distinctio vel explicabo. Eaque atque voluptate magnam. Voluptatem inventore occaecati modi culpa.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.15185505285147",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 29,
                "text": "Excepturi architecto voluptatem laboriosam magnam hic dolor natus in temporibus.",
                "UserId": 1,
                "RestaurantId": 29,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 29,
                    "name": "Abbie Will",
                    "tel": "012-354-4296 x3803",
                    "address": "0874 Nannie Point",
                    "opening_hours": "08:00",
                    "description": "Eos qui esse assumenda et.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.664729274648302",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 31,
                "text": "Et voluptate temporibus id nemo vero delectus.",
                "UserId": 1,
                "RestaurantId": 31,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 31,
                    "name": "Theresia Little",
                    "tel": "997-853-1540",
                    "address": "45502 Collins Haven",
                    "opening_hours": "08:00",
                    "description": "Quia ex quia aliquid blanditiis vel maxime voluptatibus omnis ducimus.\nUt laudantium sapiente officiis officia voluptas voluptas ea minus officiis.\nEst animi quasi minima nesciunt repudiandae nobis molestias.\nEsse dolores ratione blanditiis sunt nihil atque qui.\nMaxime reiciendis odio veritatis dolorem dolor id.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.54707009417291",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 32,
                "text": "Et rem quo debitis.",
                "UserId": 1,
                "RestaurantId": 32,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 32,
                    "name": "Linda Walter",
                    "tel": "(326) 693-6321 x1992",
                    "address": "98183 Audie Manor",
                    "opening_hours": "08:00",
                    "description": "quaerat amet quisquam",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.86552020198652",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 35,
                "text": "Molestiae quod dignissimos et iste dignissimos eum deleniti sed.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Joshuah Barrows",
                    "tel": "1-432-770-4521 x733",
                    "address": "983 Schamberger Spurs",
                    "opening_hours": "08:00",
                    "description": "Totam nisi voluptates nulla facilis aut et.\nVero qui dolor rerum voluptatem quos harum delectus saepe sint.\nRecusandae consequatur qui similique.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.64532158777938",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 39,
                "text": "Est omnis cumque est recusandae ducimus dignissimos at.",
                "UserId": 1,
                "RestaurantId": 39,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 39,
                    "name": "Rowena Hagenes",
                    "tel": "003.187.8877 x58142",
                    "address": "7026 Kennith Landing",
                    "opening_hours": "08:00",
                    "description": "Omnis id autem tenetur perspiciatis nemo consequatur et et. Vitae blanditiis in dolor nemo blanditiis nobis.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.24778674345386",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 43,
                "text": "Cupiditate quibusdam aliquid ad atque repellendus architecto eum.",
                "UserId": 1,
                "RestaurantId": 43,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 47,
                "text": "Est eaque fuga nobis et animi aperiam sint corrupti delectus.",
                "UserId": 1,
                "RestaurantId": 47,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 3
                }
            },
            {
                "id": 66,
                "text": "Qui impedit qui et.",
                "UserId": 1,
                "RestaurantId": 16,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 16,
                    "name": "Kaycee Oberbrunner",
                    "tel": "269-159-7205",
                    "address": "8520 Destini Squares",
                    "opening_hours": "08:00",
                    "description": "Ducimus voluptatum deleniti impedit qui sit consequatur.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.5226700246534",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 68,
                "text": "Soluta dignissimos repellendus est beatae tempora.",
                "UserId": 1,
                "RestaurantId": 18,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 18,
                    "name": "Reid Cassin",
                    "tel": "1-273-388-2166 x1212",
                    "address": "50941 Ervin Passage",
                    "opening_hours": "08:00",
                    "description": "Qui voluptatem repellat et vel.\nRem quo ut rerum nulla.\nAtque amet velit inventore.\nBlanditiis ab sunt.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.94101579033125",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 71,
                "text": "Voluptas non dicta illo nulla explicabo veniam veritatis dolore libero.",
                "UserId": 1,
                "RestaurantId": 21,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 21,
                    "name": "Willow Baumbach",
                    "tel": "1-017-116-9884 x00528",
                    "address": "262 Considine Plaza",
                    "opening_hours": "08:00",
                    "description": "enim voluptatum dignissimos",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.76150709631693",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 72,
                "text": "Inventore molestias eum.",
                "UserId": 1,
                "RestaurantId": 22,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 22,
                    "name": "Tierra Lehner",
                    "tel": "(936) 400-6556 x5259",
                    "address": "67768 Marks Parks",
                    "opening_hours": "08:00",
                    "description": "Tempore ipsum ad quia eos. Et aut similique ducimus ex animi optio occaecati odio.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.662144398129186",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 78,
                "text": "Necessitatibus repellendus maxime accusamus ut quibusdam.",
                "UserId": 1,
                "RestaurantId": 28,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 28,
                    "name": "Brenna Feil",
                    "tel": "1-348-343-6642 x00901",
                    "address": "811 Laney Estates",
                    "opening_hours": "08:00",
                    "description": "Sit aliquam praesentium. Earum impedit odio et facere enim. Unde vel nulla est doloremque nihil voluptatem. Perspiciatis rerum repellat qui quis quod.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.136154845825146",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 80,
                "text": "Eum corporis quasi doloribus eum velit ea excepturi voluptatem adipisci.",
                "UserId": 1,
                "RestaurantId": 30,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 30,
                    "name": "Mariane Bartell",
                    "tel": "1-224-864-8524 x843",
                    "address": "24900 Gracie Ranch",
                    "opening_hours": "08:00",
                    "description": "Nobis pariatur voluptas sed earum iusto.\nEsse dolorem et voluptatum.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.35354697673444",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 81,
                "text": "Eum ad non impedit eos et veniam enim et beatae.",
                "UserId": 1,
                "RestaurantId": 31,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 31,
                    "name": "Theresia Little",
                    "tel": "997-853-1540",
                    "address": "45502 Collins Haven",
                    "opening_hours": "08:00",
                    "description": "Quia ex quia aliquid blanditiis vel maxime voluptatibus omnis ducimus.\nUt laudantium sapiente officiis officia voluptas voluptas ea minus officiis.\nEst animi quasi minima nesciunt repudiandae nobis molestias.\nEsse dolores ratione blanditiis sunt nihil atque qui.\nMaxime reiciendis odio veritatis dolorem dolor id.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.54707009417291",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 84,
                "text": "Quia iure a sed pariatur eius vero.",
                "UserId": 1,
                "RestaurantId": 34,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 34,
                    "name": "Markus Runolfsdottir",
                    "tel": "(063) 704-8196 x962",
                    "address": "526 Homenick Garden",
                    "opening_hours": "08:00",
                    "description": "Aut esse sapiente deleniti sit ea molestiae quod eos debitis. Et consequatur consequuntur aliquam recusandae accusantium rem corrupti quasi. Sint ad voluptatem sint eum deleniti temporibus eos. Ullam et fuga sit fuga eius rerum ut.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.81372989582128",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 85,
                "text": "Aliquam est molestias aut corporis omnis pariatur et est.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Joshuah Barrows",
                    "tel": "1-432-770-4521 x733",
                    "address": "983 Schamberger Spurs",
                    "opening_hours": "08:00",
                    "description": "Totam nisi voluptates nulla facilis aut et.\nVero qui dolor rerum voluptatem quos harum delectus saepe sint.\nRecusandae consequatur qui similique.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.64532158777938",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 87,
                "text": "Repudiandae reiciendis similique impedit nihil aut voluptatem ut.",
                "UserId": 1,
                "RestaurantId": 37,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 37,
                    "name": "Francisco Von",
                    "tel": "1-742-812-1816",
                    "address": "381 Alfred Streets",
                    "opening_hours": "08:00",
                    "description": "Eveniet dolorem voluptatibus ducimus.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.746186041994306",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 89,
                "text": "Occaecati architecto quisquam optio dolorem ut ut quis dicta nemo.",
                "UserId": 1,
                "RestaurantId": 39,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 39,
                    "name": "Rowena Hagenes",
                    "tel": "003.187.8877 x58142",
                    "address": "7026 Kennith Landing",
                    "opening_hours": "08:00",
                    "description": "Omnis id autem tenetur perspiciatis nemo consequatur et et. Vitae blanditiis in dolor nemo blanditiis nobis.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.24778674345386",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 90,
                "text": "Dolore aut cupiditate.",
                "UserId": 1,
                "RestaurantId": 40,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 40,
                    "name": "Lucienne Zboncak",
                    "tel": "(843) 140-9401",
                    "address": "0196 Hickle Street",
                    "opening_hours": "08:00",
                    "description": "Occaecati nulla aperiam atque natus autem ullam consequatur est quae.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.574874329559705",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 92,
                "text": "Quae necessitatibus rem omnis dicta enim autem pariatur eius.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 42,
                    "name": "Brielle Brakus",
                    "tel": "809-933-2792 x8153",
                    "address": "822 Gorczany Walks",
                    "opening_hours": "08:00",
                    "description": "Ut nam voluptas. Temporibus tenetur expedita saepe reprehenderit. Odio expedita sit ipsum quo.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.62976762746672",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 94,
                "text": "Neque qui sapiente minus sunt saepe.",
                "UserId": 1,
                "RestaurantId": 44,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 102,
                "text": "Voluptas error et maxime sint voluptatem.",
                "UserId": 1,
                "RestaurantId": 2,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 105,
                "text": "Velit occaecati error occaecati dolorum.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 4
                }
            },
            {
                "id": 107,
                "text": "Modi nihil explicabo.",
                "UserId": 1,
                "RestaurantId": 7,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 7,
                    "name": "Yolanda Homenick",
                    "tel": "(564) 319-1210",
                    "address": "9855 Stewart Gateway",
                    "opening_hours": "08:00",
                    "description": "Minima et sit enim. Sed qui deleniti ad. Aut ipsam incidunt dolore maxime cum. Laborum est corporis hic.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.74348318306738",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 108,
                "text": "Est provident culpa labore minima commodi veniam ipsum.",
                "UserId": 1,
                "RestaurantId": 8,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 8,
                    "name": "Vernice Hackett",
                    "tel": "683.054.2136 x9584",
                    "address": "028 Don Expressway",
                    "opening_hours": "08:00",
                    "description": "Perspiciatis aut unde molestiae modi ducimus velit deserunt.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.437571145415383",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 110,
                "text": "Et in laborum.",
                "UserId": 1,
                "RestaurantId": 10,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 5
                }
            },
            {
                "id": 112,
                "text": "Cupiditate odio necessitatibus autem deleniti enim rerum.",
                "UserId": 1,
                "RestaurantId": 12,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 12,
                    "name": "Bette VonRueden",
                    "tel": "091-718-2109 x174",
                    "address": "35491 McLaughlin Avenue",
                    "opening_hours": "08:00",
                    "description": "Nam ut est qui nisi quia voluptatem.\nHarum quia est sapiente.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.01891768114639",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 114,
                "text": "Id incidunt vero aut ut veritatis.",
                "UserId": 1,
                "RestaurantId": 14,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 14,
                    "name": "Tobin Tromp",
                    "tel": "1-518-112-8233",
                    "address": "1444 Torp Coves",
                    "opening_hours": "08:00",
                    "description": "Omnis accusamus temporibus. Quo dolores rerum. Tempora vel eum. Eius sed eligendi molestiae nesciunt laborum ut voluptatibus.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=72.9242807016115",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 120,
                "text": "Dolorem praesentium nesciunt doloribus.",
                "UserId": 1,
                "RestaurantId": 20,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 20,
                    "name": "Brook Crona",
                    "tel": "439-098-0874",
                    "address": "678 Steuber Haven",
                    "opening_hours": "08:00",
                    "description": "ut quasi et",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.76226984163999",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 125,
                "text": "Omnis vel enim alias veniam voluptatem distinctio cum dolor est.",
                "UserId": 1,
                "RestaurantId": 25,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 25,
                    "name": "Miss Vance Bruen",
                    "tel": "613.671.1272",
                    "address": "41931 Hilpert Circles",
                    "opening_hours": "08:00",
                    "description": "Natus molestiae molestiae eum consequatur fuga omnis omnis.\nDoloribus adipisci nihil inventore temporibus libero qui fuga.\nNemo vel dolorem vel quae.\nVoluptatem iure non voluptatem sed sint.\nMagni enim voluptates.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.33934594357217",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 126,
                "text": "Non voluptatem iste est rerum dolore nulla.",
                "UserId": 1,
                "RestaurantId": 26,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 26,
                    "name": "Verla Nolan",
                    "tel": "601.737.8311",
                    "address": "425 Brando Tunnel",
                    "opening_hours": "08:00",
                    "description": "Et quas temporibus pariatur esse omnis dolor.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=53.14093825716761",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 129,
                "text": "Ipsa quidem et cum.",
                "UserId": 1,
                "RestaurantId": 29,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 29,
                    "name": "Abbie Will",
                    "tel": "012-354-4296 x3803",
                    "address": "0874 Nannie Point",
                    "opening_hours": "08:00",
                    "description": "Eos qui esse assumenda et.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=13.664729274648302",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 135,
                "text": "Laborum quia expedita.",
                "UserId": 1,
                "RestaurantId": 35,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 35,
                    "name": "Joshuah Barrows",
                    "tel": "1-432-770-4521 x733",
                    "address": "983 Schamberger Spurs",
                    "opening_hours": "08:00",
                    "description": "Totam nisi voluptates nulla facilis aut et.\nVero qui dolor rerum voluptatem quos harum delectus saepe sint.\nRecusandae consequatur qui similique.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.64532158777938",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 1
                }
            },
            {
                "id": 136,
                "text": "Est aperiam necessitatibus.",
                "UserId": 1,
                "RestaurantId": 36,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 36,
                    "name": "Perry Schowalter",
                    "tel": "(627) 183-1730",
                    "address": "362 Lucile Squares",
                    "opening_hours": "08:00",
                    "description": "Dolorum et molestiae labore ea ut voluptatem omnis. Porro possimus voluptatem voluptatem est quas nihil quia voluptatum. Enim saepe quisquam molestias. Commodi enim architecto. Repellendus inventore repellat aperiam veritatis porro ea. Perspiciatis laborum assumenda.\n \rAutem voluptate architecto rem cumque. Quae voluptas maxime ad sed temporibus fugiat eos natus. Explicabo maxime veniam neque provident consequatur est autem quia.\n \rVel occaecati nam. Dolor et animi earum asperiores quia et vel. Ullam quibusdam debitis facilis veritatis officia qui ut maiores rerum. Dolores ipsam libero vero ullam ea quisquam. Exercitationem quam quae aut est aspernatur tempora commodi quo. Sapiente aspernatur repudiandae quae sint animi incidunt.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.365074820698453",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 5
                }
            },
            {
                "id": 137,
                "text": "Aut rem iusto repudiandae perspiciatis et sint omnis.",
                "UserId": 1,
                "RestaurantId": 37,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 37,
                    "name": "Francisco Von",
                    "tel": "1-742-812-1816",
                    "address": "381 Alfred Streets",
                    "opening_hours": "08:00",
                    "description": "Eveniet dolorem voluptatibus ducimus.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.746186041994306",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 2
                }
            },
            {
                "id": 140,
                "text": "Optio labore dolores voluptatem modi.",
                "UserId": 1,
                "RestaurantId": 40,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 40,
                    "name": "Lucienne Zboncak",
                    "tel": "(843) 140-9401",
                    "address": "0196 Hickle Street",
                    "opening_hours": "08:00",
                    "description": "Occaecati nulla aperiam atque natus autem ullam consequatur est quae.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.574874329559705",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            },
            {
                "id": 142,
                "text": "Nostrum neque error quia non corrupti omnis accusamus.",
                "UserId": 1,
                "RestaurantId": 42,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 42,
                    "name": "Brielle Brakus",
                    "tel": "809-933-2792 x8153",
                    "address": "822 Gorczany Walks",
                    "opening_hours": "08:00",
                    "description": "Ut nam voluptas. Temporibus tenetur expedita saepe reprehenderit. Odio expedita sit ipsum quo.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.62976762746672",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 3
                }
            },
            {
                "id": 144,
                "text": "Nobis quasi dolores vero consequatur maiores facere qui ullam velit.",
                "UserId": 1,
                "RestaurantId": 44,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
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
                    "CategoryId": 2
                }
            },
            {
                "id": 149,
                "text": "Nostrum voluptas nesciunt et qui iusto eos.",
                "UserId": 1,
                "RestaurantId": 49,
                "createdAt": "2021-11-10T11:38:07.000Z",
                "updatedAt": "2021-11-10T11:38:07.000Z",
                "Restaurant": {
                    "id": 49,
                    "name": "Libbie Vandervort",
                    "tel": "(435) 838-5011 x20584",
                    "address": "8572 Kunze Crest",
                    "opening_hours": "08:00",
                    "description": "Voluptates expedita maiores nam eius unde sit. Vero mollitia deserunt. Libero optio aut et praesentium ducimus quod. Pariatur quisquam occaecati facilis possimus consequatur explicabo cum. Fuga provident et debitis placeat deserunt cumque.",
                    "image": "https://loremflickr.com/320/240/restaurant,food/?random=78.84148021721207",
                    "viewCounts": 0,
                    "createdAt": "2021-11-10T11:38:07.000Z",
                    "updatedAt": "2021-11-10T11:38:07.000Z",
                    "CategoryId": 4
                }
            }
        ],
        "FavoritedRestaurants": [],
        "Followers": [],
        "Followings": []
    },
    "isFollowed": false
}

export default{
    data(){
       return{
        profile:{
         image:"",
         name:"",        
        }
         }
       },
   created(){
    this.fetchUser(this.$route.params.id)
   },
   methods:{
    fetchUser(id){
      console.log(id)
     const {image,name}=dummyData.profile
     this.profile={
       image:image,
       name:name
     }
    },
     handleFileChange(event){
      const file=event.target.files
     if(file.length===0){
     return this.profile.image =""     
     }
      const imageURL=window.URL.createObjectURL(file[0])
      this.profile.image=imageURL     
    },
    handleSubmit(event){
     const form=event.target
     const formData=new FormData(form)
      for (let [name, value] of formData.entries()) {
      console.log(name + ': ' + value)  
    }
   }
   }
}

</script>