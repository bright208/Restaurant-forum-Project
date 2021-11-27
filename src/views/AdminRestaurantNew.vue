<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <h1>新增餐廳的後台</h1>

    <AdminRestaurantForm
      v-on:after-submit="handleAfterSubmit"
      :isProcessing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      isProcessing: false,
    };
  },
  components: {
    AdminRestaurantForm: AdminRestaurantForm,
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data } = await adminAPI.restaurants.create(formData);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "admin-restaurants" }); //成功的話則轉址到 `/admin/restaurants`
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳",
        });
      }
    },
  },
};
</script>