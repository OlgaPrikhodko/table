import { defineStore } from "pinia";

type PaginationState = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};

export const usePaginationStore = defineStore("pagination", {
  state: (): PaginationState => ({
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: 0,
  }),
  getters: {
    totalPages: (state): number => {
      return Math.ceil(state.totalItems / state.itemsPerPage);
    },
    startIndex: (state): number => {
      return (state.currentPage - 1) * state.itemsPerPage;
    },
  },
  actions: {
    setPage(page: number) {
      this.currentPage = page;
    },
    setItemsPerPage(itemsPerPage: number) {
      this.itemsPerPage = itemsPerPage;
    },
    setTotalItems(totalItems: number) {
      this.totalItems = totalItems;
    },
  },
});
