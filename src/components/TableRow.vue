<script lang="ts" setup>
import { storeToRefs } from "pinia";

import type { Employee } from "@/lib/types";
import { useEmployeesStore } from "@/stores/employees";
import { useHeaderTitlesStore } from "@/stores/headerTitles";

import TableMenuButton from "@/components/TableMenuButton.vue";
import TableCellStatus from "@/components/TableCellStatus.vue";
import TheCheckbox from "@/components/TheCheckbox.vue";
import GroupingIcon from "@/icons/ExpandableIcon.vue";

defineProps<{
  rowItem: Employee;
  type: "parent" | "child";
}>();

const employeesStore = useEmployeesStore();
const headerTitlesStore = useHeaderTitlesStore();
const { headerTitles } = storeToRefs(headerTitlesStore);

const toggleExpanded = (id: string) => {
  employeesStore.toggleGroup(id);
};

const toggleCheckedItem = (
  parentId: string,
  childId: string | null,
  value: boolean
) => {
  const checkedValue = !value;
  employeesStore.setEmployeeItemChecked(parentId, childId, checkedValue);
};
</script>

<template>
  <tr
    class="table__row"
    :class="{ 'table__row--expanded': rowItem.expanded }"
    :key="rowItem.healthCheckId || rowItem.employeeId"
  >
    <td>
      <TheCheckbox
        :id="rowItem.healthCheckId || rowItem.employeeId"
        name="rowCheckbox"
        :checked="rowItem.checked"
        :indeterminated="type === 'parent' ? rowItem.indeterminate : false"
        @onChange="
          toggleCheckedItem(
            rowItem.employeeId,
            rowItem.healthCheckId,
            rowItem.checked
          )
        "
      />
    </td>
    <td
      class="table__cell-expandable"
      @click="toggleExpanded(rowItem.employeeId)"
    >
      <GroupingIcon v-if="type === 'parent'" :expanded="rowItem.expanded" />
    </td>
    <td
      v-for="{ name } in headerTitles"
      :key="name"
      :class="{ 'table__cell-title': name === 'title' }"
    >
      <p
        v-if="type === 'parent' && name === 'title'"
        :class="{ 'table__cell--expanded-title': rowItem.expanded }"
      >
        {{ rowItem[name] }} ({{ rowItem.children.length }})
      </p>
      <template v-else-if="name === 'status' || name === 'userStatus'">
        <TableCellStatus :statusType="name" :statusText="rowItem[name]" />
      </template>

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
  border-right: none;
}

.table__row--expanded td {
  background-color: #effaf5;
}

.table__row:hover td {
  background-color: #f3f4f6;
}

.table__cell-expandable {
  padding-right: 0;
  padding-left: 0.7rem;
}

.table__cell--expanded-title {
  font-weight: bold;
}

.table__cell-title {
  padding-left: 0;
}
</style>
