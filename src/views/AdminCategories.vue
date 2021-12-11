<template>
  <div class="container py-5">
    <!-- AdminNav -->
    <AdminNav />
    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-on:keyup.enter="createCategory"
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            v-on:click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
          >
            {{ isProcessing ? "資料送出中" : "新增" }}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              v-on:click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-on:click.stop.prevent="toggleIsEditing(category.id)"
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              v-on:click.stop.prevent="updateCategory(category)"
            >
              Save
            </button>
            <button
              v-on:click.stop.prevent="deleteCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Delete
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

export default {
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isProcessing: false,
    };
  },
  components: {
    AdminNav: AdminNav,
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "", //新增兩個屬性
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法載入餐廳類別清單",
        });
      }
    },
    async createCategory() {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.newCategoryName = ""; // 清空原本欄位，提高使用者體驗
        this.fetchCategories();
        this.isProcessing = false;
      } catch (error) {
        console.log(error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const { data } = await adminAPI.categories.delete(categoryId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.fetchCategories();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除該餐廳類別",
        });
      }
    },
    toggleIsEditing(id) {
      this.categories = this.categories.map((category) => {
        if (category.id === id) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }

        return category;
      });
    },
    async updateCategory(category) {
      try {
        const { data } = await adminAPI.categories.update(category.id, {
          name: category.name, //把data上的name寫進API
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(category.id); //把狀態切換回去並且儲存資料
        this.fetchCategories();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法儲存資料",
        });
      }
    },
    handleCancel(id) {
      this.categories = this.categories.map((category) => {
        if (category.id === id) {
          return { ...category, name: category.nameCached };
        } //把原本的餐廳類別名稱還回去
        else {
          return category;
        }
      });

      this.toggleIsEditing(id);
    },
  },
  created() {
    this.fetchCategories();
  }
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>