<script lang="ts" setup>
import type { Employee } from "@/lib/types";
import { useEmployeesStore, headerTitles } from "@/stores/employees";

import TableMenuButton from "@/components/TableMenuButton.vue";
import GroupingIcon from "@/components/ExpandableIcon.vue";

defineProps<{
  rowItem: Employee;
  type: "parent" | "child";
}>();

const employeesStore = useEmployeesStore();

const toggleExpanded = (id: string) => {
  employeesStore.toggleGroup(id);
};
</script>

<template>
  <tr
    class="table__row"
    :class="{ 'table__row--expanded': rowItem.expanded }"
    :key="rowItem.healthCheckId || rowItem.employeeId"
  >
    <td>
      <input
        class="table__checkbox"
        type="checkbox"
        :id="rowItem.healthCheckId || rowItem.employeeId"
      />
    </td>
    <td
      class="table__cell-expandable"
      @click="toggleExpanded(rowItem.employeeId)"
    >
      <GroupingIcon v-if="type === 'parent'" :expanded="rowItem.expanded" />
    </td>
    <td v-for="{ name } in headerTitles" :key="name">
      {{ rowItem[name] }}
    </td>
    <td><TableMenuButton /></td>
  </tr>
</template>

<style scoped>
.table__row {
  border-bottom-width: 1px;
  border: 1px solid #d1d5db;
}

.table__row--expanded td {
  background-color: #effaf5;
}

.table__row:hover td {
  background-color: #f3f4f6;
}

.table__cell-expandable {
  padding: 0;
  padding-left: 1rem;
  padding-right: -0.2rem;
}
</style>
