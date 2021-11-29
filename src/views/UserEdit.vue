<template>
  <div class="container py-5">
    <form v-on:submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="profile.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="profile.image"
          width="200px"
          height="200px"
          class="d-block"
          v-if="profile.image"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          v-on:change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "資料送出中" : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      profile: {
        image: "",
        name: "",
        id: -1,
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUser(this.$route.params.id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.getUser(userId);
        const { image, name, id } = data.profile;
        this.profile = { ...this.profile, image: image, name: name, id: id };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入使用者資料",
        });
      }
    },
    handleFileChange(event) {
      const file = event.target.files;
      if (file.length === 0) {
        return (this.profile.image = "");
      }
      const imageURL = window.URL.createObjectURL(file[0]);
      this.profile.image = imageURL;
    },
    async handleSubmit(event) {
      if (!this.profile.name) {
        Toast.fire({
          icon: "error",
          title: "您尚未填寫姓名",
        });
        return;
      }
      try {
        this.isProcessing = true;
        const form = event.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.editUser(this.profile.id, formData);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "您的個人資料已經編輯成功!",
        });
        this.$router.push({
          name: "profile-page",
          params: { id: this.profile.id },
        });
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "暫時無法編輯資料，請稍後再試",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === to.params.id) {
      return;
    } else {
      this.$router.push({ name: "notfound404" });
    }
    next();
  },
};
</script>