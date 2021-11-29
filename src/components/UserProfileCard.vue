<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="profile.image | emptyImage" width="300px" height="300px" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ profile.name }}</h5>
        <p class="card-text">
          {{ profile.email }}
        </p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ profile.favoritedLength }}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{ profile.followingsLength }}</strong> followings (追蹤者)
          </li>
          <li>
            <strong>{{ profile.followersLength }}</strong> followers (追隨者)
          </li>
        </ul>
        <p>
          <template v-if="currentUser.id === profile.id">
            <router-link
              :to="{ name: 'profile-page-edit', params: { id: profile.id } }"
              ><button type="submit" class="btn btn-primary">
                edit
              </button></router-link
            >
          </template>
          <template v-else>
            <button
              type="submit"
              class="btn btn-primary mr-2"
              v-if="!isFollowed"
              v-on:click="addFollowing(profile.id)"
            >
              追蹤
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              v-else
              v-on:click="deleteFollowing(profile.id)"
            >
              取消追蹤
            </button>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from "../utils/mixins";
import usersAPI from "../apis/users";

export default {
  props: {
    profiles: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favoritedLength: 0,
        followingsLength: 0,
        followersLength: 0,
        isAdmin: false,
      },
      isFollowed: this.initialIsFollowed,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = true;
        Toast.fire({
          icon: "success",
          title: "您已成功追蹤",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "暫時無法追蹤該位使用者",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.isFollowed = false;
        Toast.fire({
          icon: "success",
          title: "您已成功取消追蹤",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "暫時無法追蹤該位使用者",
        });
      }
    },
    fetchUser() {
      const {
        Comments,
        id,
        name,
        email,
        image,
        FavoritedRestaurants,
        Followers,
        Followings,
      } = this.profiles;

      this.profile = {
        ...this.profile,
        id: id,
        name: name,
        email: email,
        image: image,
        commentsLength: Comments.length,
        favoritedLength: FavoritedRestaurants.length,
        followingsLength: Followings.length,
        followersLength: Followers.length,
      };
    },
  },
  watch: {
    profiles: {
      handler() {
        this.fetchUser();
      },
    },
    initialIsFollowed: {
      handler() {
        this.isFollowed = this.initialIsFollowed;
      },
    },
  },
};
</script>