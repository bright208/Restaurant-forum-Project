<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
import { emptyImageFilter } from "../utils/mixins.js";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  mixins: [emptyImageFilter],
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getSingleRestaurant(
          restaurantId
        );

        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
        } = data.restaurant;
        this.restaurant = {
          ...this.restaurant,
          id: id,
          name: name,
          categoryName: Category.name,
          image: image,
          openingHours: openingHours,
          tel: tel,
          address: address,
          description: description,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "title",
          title: "無法載入餐廳個別資料",
        });
      }
    },
  },
  created() {
    this.fetchRestaurant(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchRestaurant(to.params.id);
    next();
  },
};
</script>