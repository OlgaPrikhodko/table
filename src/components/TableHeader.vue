<script lang="ts" setup>
import { headerTitles, useEmployeesStore } from "@/stores/employees";

import TableRefreshButton from "@/components/TableRefreshButton.vue";
import { ref } from "vue";

const employeesStore = useEmployeesStore();

const getColspan = (name: string) => {
  return name === "title" ? 2 : 1;
};

const allChecked = ref(false);
const onToggleCheckedAll = (val: boolean) => {
  employeesStore.setAllEmployeersChecked(val);
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
          v-model="allChecked"
          @click="onToggleCheckedAll(!allChecked)"
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
