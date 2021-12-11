<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialrestaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->

    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  components: {
    NavTabs: NavTabs,
    RestaurantCard: RestaurantCard,
    RestaurantsNavPills: RestaurantsNavPills,
    RestaurantsPagination: RestaurantsPagination,
  },
  methods: {
    async fetchRestaurants(queryPage, queryCategoryId) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },

  created() {
    this.fetchRestaurants("", ""); //載入網頁時先請求第一頁不分類別的資料
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;

    this.fetchRestaurants(page, categoryId);
    next();
  },
};
</script>