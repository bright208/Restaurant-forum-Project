<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profile in profiles" :key="profile.id">
          <th scope="row">
            {{ profile.id }}
          </th>
          <td>{{ profile.email }}</td>
          <td>{{ profile.isAdmin | userRole }}</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
              v-show="profile.isAdmin && currentUser.id !== profile.id"
              v-on:click="toggleUserRole(profile.id, profile.isAdmin)"
            >
              set as user
            </button>
            <button
              type="button"
              class="btn btn-link"
              v-show="!profile.isAdmin"
              v-on:click="toggleUserRole(profile.id, profile.isAdmin)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"]),
  },
  components: {
    AdminNav: AdminNav,
  },
  data() {
    return {
      profiles: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get();
        this.profiles = data.users;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入使用者清單，請稍後再試",
        });
      }
    },
    async toggleUserRole(userId, isAdmin) {
      try {
        const { data } = await adminAPI.users.update(userId, {
          isAdmin: (!isAdmin).toString(), //後端傳入的規格要求isAdmin的屬性值必須為字串
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.fetchUsers();
        Toast.fire({
          icon: "success",
          title: "您已成功切換該位使用者的角色!",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "您暫時無法更換使用者的角色，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchUsers();
  },
  filters: {
    userRole(isAdmin) {
      if (isAdmin) {
        return "admin";
      } else {
        return "user";
      }
    },
  },
};
</script>