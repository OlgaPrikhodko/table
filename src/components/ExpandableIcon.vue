<script lang="ts" setup>
defineProps<{ expanded: boolean }>();
</script>

<template>
  <svg
    data-accordion-icon=""
    class="expandable-icon"
    :class="{ 'expandable-icon--collapsed': expanded }"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<style scoped>
.expandable-icon {
  display: block;
  height: 1.25rem;
  width: 1.25rem;
}
.expandable-icon--collapsed {
  transform: scaleY(-1);
}
</style>
