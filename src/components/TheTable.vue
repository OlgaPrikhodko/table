<script setup lang="ts">
import { useEmployeesStore } from "@/stores/employees";

import TableRow from "@/components/TableRow.vue";
import TableHeader from "@/components/TableHeader.vue";
import PaginationControls from "@/components/PaginationControls.vue";

import { useHeaderTitlesStore } from "@/stores/headerTitles";

const employeesStore = useEmployeesStore();
employeesStore.setEmployees();

const headerTitlesStore = useHeaderTitlesStore();
</script>

<template>
  <div class="table-container">
    <table
      class="table"
      :style="{ width: `${headerTitlesStore.tableWidth}px` }"
    >
      <TableHeader />

      <tbody>
        <template v-for="employee of employeesStore.employees">
          <TableRow
            :rowItem="employee"
            :key="employee.employeeId"
            type="parent"
          />
          <template v-if="employee.children.length > 0 && employee.expanded">
            <TableRow
              v-for="child in employee.children"
              :rowItem="child"
              :key="child.healthCheckId + employee.title"
              type="child"
            />
          </template>
        </template>
      </tbody>
    </table>

    <PaginationControls />
  </div>
</template>

<style>
.table-container {
  overflow-x: auto;
  max-width: 100%;
  position: relative;
}

.table {
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  color: #1f2937;
  box-shadow: 1px 4px 6px -1px rgba(0, 0, 0, 0.2),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.table th,
.table td {
  padding: 0.5rem 1rem;
  white-space: nowrap;
  background-color: #fff;
}

.table .table th:first-child,
.table td:first-child {
  position: sticky;
  left: -1px;
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
  background-color: #f3f4f6;
  border-color: #d1d5db;
  border-radius: 0.25rem;
  width: 1rem;
  height: 1rem;
}
</style>
