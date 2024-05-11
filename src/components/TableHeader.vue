<script lang="ts" setup>
import { headerTitles } from "@/stores/employees";

import TableRefreshButton from "@/components/TableRefreshButton.vue";

const getColspan = (name: string) => {
  return name === "title" ? 2 : 1;
};

const onCheckAll = () => {
  console.log("set all rows checked");
};
</script>

<template>
  <thead class="table__head">
    <tr>
      <th>
        <input
          class="table__checkbox"
          type="checkbox"
          id="headerCheckbox"
          @click="onCheckAll"
        />
      </th>
      <th
        v-for="{ name, title } in headerTitles"
        :key="name"
        :colspan="getColspan(name)"
      >
        {{ title }}
      </th>
      <th><TableRefreshButton /></th>
    </tr>
  </thead>
</template>

<style scoped></style>
