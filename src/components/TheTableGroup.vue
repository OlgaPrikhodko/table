<script lang="ts" setup>
import type { Employee } from "@/lib/types";
import { useEmployees } from "@/stores/employees";

import TableMenuButton from "@/components/TableMenuButton.vue";

defineProps<{
  rowItem: Employee;
  type: "parent" | "child";
}>();

const employeesStore = useEmployees();
</script>

<template>
  <tr :key="rowItem.healthCheckId || rowItem.employeeId">
    <td>
      <input
        type="checkbox"
        :id="rowItem.healthCheckId || rowItem.employeeId"
      />
    </td>
    <td v-for="{ name } in employeesStore.headerTitles" :key="name">
      <template v-if="type === 'parent' && name === 'title'">
        <span v-if="!rowItem.expanded">[+]</span><span v-else>[-]</span>
      </template>
      <template v-else><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></template>
      {{ rowItem[name] }}
    </td>
    <td><TableMenuButton /></td>
  </tr>
</template>

<style scoped></style>
