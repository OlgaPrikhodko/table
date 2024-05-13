<script lang="ts" setup>
import { reactive } from "vue";
import type { Employee } from "@/lib/types";
import { useEmployeesStore, headerTitles } from "@/stores/employees";

import TableMenuButton from "@/components/TableMenuButton.vue";
import GroupingIcon from "@/components/ExpandableIcon.vue";

const props = defineProps<{
  rowItem: Employee;
  type: "parent" | "child";
}>();

const employeesStore = useEmployeesStore();

const toggleExpanded = (id: string) => {
  employeesStore.toggleGroup(id);
};
const statusClass = reactive({
  "status--valid": props.rowItem.status === "valid",
  "status--expired": props.rowItem.status === "expired",
  "status--canceled": props.rowItem.status === "canceled",
});

const userStatusClass = reactive({
  "status--valid": props.rowItem.userStatus === "active",
});
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
        :checked="rowItem.checked"
      />
    </td>
    <td
      class="table__cell-expandable"
      @click="toggleExpanded(rowItem.employeeId)"
    >
      <GroupingIcon v-if="type === 'parent'" :expanded="rowItem.expanded" />
    </td>
    <td v-for="{ name } in headerTitles" :key="name">
      <template v-if="type === 'parent' && name === 'title'">
        {{ rowItem[name] }} ({{ rowItem.children.length }})
      </template>
      <span v-else-if="name === 'status'" class="status" :class="statusClass">{{
        rowItem[name]
      }}</span>
      <span
        v-else-if="name === 'userStatus'"
        class="status"
        :class="userStatusClass"
        >{{ rowItem[name] }}</span
      >
      <template v-else>
        {{ rowItem[name] }}
      </template>
    </td>
    <td><TableMenuButton /></td>
  </tr>
</template>

<style scoped>
.table__row {
  border-bottom-width: 1px;
  border: 1px solid var(--color-border);
}

.table__row--expanded td {
  background-color: #effaf5;
}

.table__row--expanded td:nth-child(3) {
  font-weight: bold;
}

.table__row:hover td {
  background-color: #f3f4f6;
}

.table__cell-expandable {
  padding: 0;
  padding-left: 1rem;
  padding-right: -0.2rem;
}

.status {
  text-transform: capitalize;
  border-radius: 0.6rem;
  padding: 3px 10px;
  font-weight: bold;
  font-size: 0.75rem;
}

.status--valid {
  background-color: var(--color-active);
}

.status--expired {
  background-color: #ff8383;
  color: #690000;
}

.status--canceled {
  background-color: #dedfe5;
  color: #65696e;
}
</style>
