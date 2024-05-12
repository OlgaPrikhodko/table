<script setup lang="ts">
import { usePaginationStore } from "@/stores/pagination";

const paginationStore = usePaginationStore();
</script>

<template>
  <div class="pagination">
    <button
      v-for="page in paginationStore.totalPages"
      :key="page"
      @click="paginationStore.setPage(page)"
      :class="{ active: page === paginationStore.currentPage }"
    >
      {{ page }}
    </button>
  </div>
</template>

<style>
/* Add your pagination control styles here */
</style>
