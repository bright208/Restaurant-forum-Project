<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數：{{ restaurant.commentLength }}</li>
      <li>瀏覽次數：{{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      restaurant: {
        categoryName: "",
        commentLength: 0,
        viewCounts: 0,
        name: "",
      },
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant(restaurantId);
        const { name, Comments, Category, viewCounts } = data.restaurant;
        this.restaurant = {
          ...this.restaurant,
          name: name,
          viewCounts: viewCounts,
          commentLength: Comments.length,
          categoryName: Category.name,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "success",
          title: "無法載入餐廳個別資料，請稍後再試",
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
