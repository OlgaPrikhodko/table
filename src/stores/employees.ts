import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";
import { getEmployees } from "@/lib/getEmployees";

type EmployeeState = {
  ids: string[];
  employees: Map<string, Employee>;
  headerTitles: { name: string; title: string }[];
};

export const useEmployees = defineStore("employees", {
  state: (): EmployeeState => ({
    ids: [],
    employees: new Map(),
    headerTitles: [
      { name: "title", title: "Full name / Health check" },
      { name: "code", title: "Code" },
      { name: "expiration", title: "Expiration" },
      { name: "status", title: "Status" },
      { name: "department", title: "Department" },
      { name: "userStatus", title: "User status" },
      { name: "jobTitle", title: "Job title" },
    ],
  }),
  actions: {
    setEmployees() {
      const { employeeIds, employees } = getEmployees();
      this.employees = employees;
      this.ids = employeeIds;
    },
    toggleGroup(id: string) {
      const employee = this.employees.get(id);
      if (!employee) return;

      employee.expanded = !employee.expanded;
    },
  },
});
