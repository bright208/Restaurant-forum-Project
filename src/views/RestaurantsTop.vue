<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant-show', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant-show', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show
            </router-link>
            <button
              type="button"
              class="btn btn-danger mr-2"
              v-if="restaurant.isFavorited"
              v-on:click="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              v-on:click="addToFavorite(restaurant.id)"
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
import NavTabs from "../components/NavTabs.vue";
import apiTopRestaurants from "../apis/restaurants";
import { Toast } from "../utils/helpers";
import apiFavoriteRestaurant from "../apis/users";

export default {
  components: {
    NavTabs: NavTabs,
  },

  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async addToFavorite(restaurantId) {
      try {
        const { data } = await apiFavoriteRestaurant.addFavorite(restaurantId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return { ...restaurant, isFavorited: true };
          } else {
            return restaurant;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法加到我的最愛",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await apiFavoriteRestaurant.deleteFavorite(
          restaurantId
        );

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return { ...restaurant, isFavorited: false };
          } else {
            return restaurant;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法從我的最愛移除",
        });
      }
    },
    async fetchTopRestaurants() {
      try {
        const { data } = await apiTopRestaurants.getTopRestaurants();        
        this.restaurants = data.restaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入Top10餐廳",
        });
      }
    },
  },
  created() {
    this.fetchTopRestaurants();
  },
};
</script>