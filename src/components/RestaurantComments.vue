<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          v-on:click.prevent.stop="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <a href="#">
            {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>


<script>
import { fromNowFilter } from "../utils/mixins.js";
import commentAPI from "../apis/comment";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {};
  },
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        const { data } = await commentAPI.delete(commentId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$emit("after-delete-comment", commentId);
        Toast.fire({
          icon: "success",
          title: "您已成功刪除評論",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試",
        });
      }
    },
  },
};
</script>