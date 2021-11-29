<template>
  <div class="container py-5">
    <!-- UserProfileCard 的區域-->
    <UserProfileCard :profiles="profile" :initialIsFollowed="isFollowed" />

    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard追蹤者區域-->
        <UserFollowingsCard :Followings="Followings" />
        <br />
        <!--UserFollowersCard 追隨者區域 -->
        <UserFollowersCard :Followers="Followers" />
      </div>
      <div class="col-md-8">
        <!--已評論餐廳區域-->
        <UserCommentsCard :Comments="Comments" />
        <br />
        <!--收藏的餐廳區域-->
        <UserFavoritedRestaurantsCard
          :FavoritedRestaurants="FavoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>


<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      profile: {},
      isFollowed: false,
      Comments: [],
      FavoritedRestaurants: [],
      Followers: [],
      Followings: [],
    };
  },
  components: {
    UserProfileCard: UserProfileCard,
    UserFollowingsCard: UserFollowingsCard,
    UserFollowersCard: UserFollowersCard,
    UserCommentsCard: UserCommentsCard,
    UserFavoritedRestaurantsCard: UserFavoritedRestaurantsCard,
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.getUser(userId);
        this.profile = data.profile;
        this.isFollowed = data.isFollowed;
        this.Comments = data.profile.Comments;
        this.FavoritedRestaurants = data.profile.FavoritedRestaurants;
        this.Followers = data.profile.Followers;
        this.Followings = data.profile.Followings;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchUser(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchUser(to.params.id);
    next();
  },
};
</script>