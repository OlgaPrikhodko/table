import { defineStore } from "pinia";

export const PER_PAGE_OPTIONS = [3, 6, 9] as const;

type ItemsPerPage = (typeof PER_PAGE_OPTIONS)[number];

type PaginationState = {
  currentPage: number;
  itemsPerPage: ItemsPerPage;
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
    setItemsPerPage(itemsPerPage: ItemsPerPage) {
      this.itemsPerPage = itemsPerPage;
    },
    setTotalItems(totalItems: number) {
      this.totalItems = totalItems;
    },
  },
});
