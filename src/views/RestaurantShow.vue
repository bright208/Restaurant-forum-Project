<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->

    <RestaurantDetail :initialrestaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <restaurantComments
      :restaurantComments="restaurantComments"
      :currentUser="currentUser"
      v-on:after-delete-comment="afterDeleteComment"
    />

    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurantId="restaurant.id"
      v-on:after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import restaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "../apis/restaurants";
import commentAPI from "../apis/comment";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    RestaurantDetail: RestaurantDetail,
    restaurantComments: restaurantComments,
    CreateComment: CreateComment,
  },
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
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]), //從Vuex拿到currentUser物件的資料
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant(restaurantId);
        this.restaurant = {
          //整理出render需要的資料
          id: data.restaurant.id,
          name: data.restaurant.name,
          categoryName: data.restaurant.Category.name,
          image: data.restaurant.image,
          openingHours: data.restaurant.opening_hours,
          tel: data.restaurant.tel,
          address: data.restaurant.address,
          description: data.restaurant.description,
          isFavorited: data.isFavorited,
          isLiked: data.isLiked,
        };
        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入餐廳個別資料",
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    async afterCreateComment(formData) {
      try {
        const { data } = await commentAPI.create(formData);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.fetchRestaurant(this.restaurant.id);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論",
        });
      }
    },
  },
  created() {
    const restaurantId = this.$route.params.id; //取出url的動態路由
    this.fetchRestaurant(restaurantId);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchRestaurant(to.params.id);
    next();
  },
};
</script>