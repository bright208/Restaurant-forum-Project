<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <router-link
          class="page-link"
          aria-label="Previous"
          :to="{
            name: 'restaurants',
            query: { categoryId: categoryId, page: previousPage },
          }"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <li
        v-for="page in totalPage"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <router-link
          class="page-link"
          :to="{
            name: 'restaurants',
            query: { categoryId: categoryId, page: page },
          }"
        >
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li
        class="page-item"
        :class="{ disabled: currentPage === totalPage.length }"
      >
        <router-link
          class="page-link"
          aria-label="Next"
          :to="{
            name: 'restaurants',
            query: { categoryId: categoryId, page: nextPage },
          }"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    categoryId: {
      type: [String, Number],
      default: "",
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Array,
      required: true,
    },
    previousPage: {
      type: Number,
      required: true,
    },
    nextPage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.page-link {
  height: 37px;
  padding: 7px 20px;
  color: blueviolet;
}
.page-item.active .page-link,
.page-item.active span {
  color: white;
  background-color: blueviolet;
  border-color: blueviolet;
  z-index: 1;
}
.page-item span {
  color: blueviolet;
}
a.page-link:hover,
a.page-link:hover span {
  color: white;
  background-color: blueviolet;
  border-color: blueviolet;
}
</style>