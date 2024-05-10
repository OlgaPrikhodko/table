<script setup lang="ts">
import TheTableGroup from "@/components/TheTableGroup.vue";
import TableRefreshButton from "@/components/TableRefreshButton.vue";
import { useEmployees } from "@/stores/employees";

const employeesStore = useEmployees();
employeesStore.setEmployees();

const toggleGroup = (id: string) => {
  console.log("toggle", id);
  // groupedData.value[index].expanded = !groupedData.value[index].expanded;
};

const onCheckAll = () => {
  console.log("set all rows checked");
};
</script>

<template>
  <div class="table-container">
    <table class="table">
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
            v-for="{ name, title } in employeesStore.headerTitles"
            :key="name"
          >
            {{ title }}
          </th>
          <th><TableRefreshButton /></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="[employeeId, employee] in employeesStore.employees">
          <TheTableGroup :rowItem="employee" :key="employeeId" type="parent" />
          <template v-if="employee.children.length > 0 && employee.expanded">
            <TheTableGroup
              v-for="child in employee.children"
              :rowItem="child"
              :key="child.healthCheckId"
              type="child"
            />
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-container {
  overflow-x: auto;
  max-width: 100%;
  position: relative;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.table {
  table-layout: auto;
  border-collapse: collapse;
  width: 100%;
  text-align: left;
  color: #1f2937;
}

.table__head {
  color: #374151;
}

.table tr {
  border-bottom-width: 1px;
  border: 1px solid #d1d5db;

  :hover {
    /* should be more bluish color */
    background-color: #f3f4f6;
  }
}

.table tr:hover td {
  background-color: #f3f4f6;
}

.table th,
.table td {
  padding: 0.5rem 1rem;
  white-space: nowrap;
}

.table th {
  font-weight: bold;
  padding: 0.7rem 1rem;
}

.table td {
  border-left: none;
  border-right: none;
}

.table th:first-child,
.table td:first-child,
table__sticky {
  position: sticky;
  left: 0;
  /* background-color: #f8f9fa;  */
  /* background-color: #f9fafb; */
  z-index: 2;
  border-left: none;
  text-align: left;
}

.table th:last-child,
.table td:last-child {
  position: sticky;
  right: 0;
  z-index: 2;
  text-align: center;
  border-right: none;
}

.table__checkbox {
  background-color: rgb(243, 244, 246);
  border-color: rgb(209, 213, 219);
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;
}
</style>
