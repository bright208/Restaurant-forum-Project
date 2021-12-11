<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>

    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <template v-if="user.id !== currentUser.id">
            <button
              type="button"
              class="btn btn-danger"
              v-if="user.isFollowed"
              v-on:click.stop.prevent="notFollowed(user.id)"
            >
              取消追蹤
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-else
              v-on:click.stop.prevent="isFollowed(user.id)"
            >
              追蹤
            </button>
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import NavTabs from "../components/NavTabs.vue";
import ApiUsers from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"])
  },
  components: {
    NavTabs: NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  mixins: [emptyImageFilter],
  methods: {
    async isFollowed(userId) {
      try {
        const { data } = await ApiUsers.addFollowing(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          } else {
            return user;
          }
        });
        console.log(this.users);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async notFollowed(userId) {
      try {
        const { data } = await ApiUsers.deleteFollowing(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            };
          } else {
            return user;
          }
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
    async fetchTopUsers() {
      try {
        const { data } = await ApiUsers.getTopUsers();
        this.users = data.users.map((user) => {
          return {
            id: user.id,
            name: user.name,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed,
          };
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchTopUsers();
  },
};
</script>