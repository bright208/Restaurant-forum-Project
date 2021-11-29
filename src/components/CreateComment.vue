<template>
  <form v-on:submit.prevent.stop="handleSubmit()">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { Toast } from "../utils/helpers";
export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.text) {
        Toast.fire({
          icon: "error",
          title: "您尚未填寫任何評論",
        });
        return;
      }
      this.$emit("after-create-comment", {
        restaurantId: this.restaurantId,
        text: this.text,
      });
      this.text = ""; // 將表單內的資料清空
      Toast.fire({
        icon: "success",
        title: "您已成功新增評論!",
      });
    },
  },
};
</script>