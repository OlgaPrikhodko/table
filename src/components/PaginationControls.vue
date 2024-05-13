<script setup lang="ts">
import { usePaginationStore } from "@/stores/pagination";

const paginationStore = usePaginationStore();
const perPageOptions = [3, 6, 9];
</script>

<template>
  <div class="pagination">
    <p>
      <span class="pagination__title">Total:</span>
      {{ paginationStore.totalItems }}
    </p>
    <p>
      Page {{ paginationStore.currentPage }} / {{ paginationStore.totalPages }}
    </p>
    <div class="pagination__navigation">
      <button
        class="pagination__button"
        v-for="page in paginationStore.totalPages"
        :key="page"
        @click="paginationStore.setPage(page)"
        :class="{
          'pagination__button--active': page === paginationStore.currentPage,
        }"
      >
        {{ page }}
      </button>
    </div>

    <div class="pagination__per-page">
      <span class="pagination__title">Show:</span>
      <button
        class="pagination__button"
        v-for="option in perPageOptions"
        :key="option"
        :class="{
          'pagination__button--active': option === paginationStore.itemsPerPage,
        }"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>

<style>
.pagination {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.pagination__title {
  font-weight: bold;
}

.pagination__navigation {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination__per-page {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination__button {
  border: none;
  border-radius: 3px;
  padding: 0.5rem 0.7rem;
}

.pagination__button:hover {
  font-weight: bold;
}

.pagination__button--active {
  font-weight: bold;
  background-color: var(--color-active);
}
</style>
