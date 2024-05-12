import { computed, ref } from "vue";

export function usePagination(totalItems: number, itemsPerPage = 3) {
  const currentPage = ref(1);

  const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage));
  const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);

  const paginate = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    paginate,
  };
}
