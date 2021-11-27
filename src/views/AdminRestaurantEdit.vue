<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialrestaurant="restaurant"
      v-on:after-submit="handleSubmit"
      :isProcessing="isProcessing"
    />
  </div>
</template>


<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  components: {
    AdminRestaurantForm: AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getSingleRestaurant(
          restaurantId
        );
        const {
          id,
          name,
          CategoryId: categoryId,
          tel,
          address,
          description,
          image,
          opening_hours: openingHours,
        } = data.restaurant;
        this.restaurant = {
          id: id,
          name: name,
          categoryId: categoryId,
          tel: tel,
          address: address,
          description: description,
          image: image,
          openingHours: openingHours,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入餐廳個別資料",
        });
      }
    },
    async handleSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.updateSingleRestaurant(
          this.restaurant.id,
          formData
        );
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法編輯餐廳資料",
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