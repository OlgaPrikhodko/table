import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";
import { getEmployees } from "@/lib/getEmployees";

type EmployeeState = {
  ids: string[];
  all: Map<string, Employee>;
};

type HeaderTitle = { name: keyof Employee; title: string };

export const headerTitles: HeaderTitle[] = [
  { name: "title", title: "Full name / Health check" },
  { name: "code", title: "Code" },
  { name: "expiration", title: "Expiration" },
  { name: "status", title: "Status" },
  { name: "department", title: "Department" },
  { name: "userStatus", title: "User status" },
  { name: "jobTitle", title: "Job title" },
];

export const useEmployeesStore = defineStore("employeesStore", {
  state: (): EmployeeState => ({
    ids: [],
    all: new Map(),
  }),
  actions: {
    setEmployees() {
      const { employeeIds, employees } = getEmployees();
      this.all = employees;
      this.ids = employeeIds;
    },
    toggleGroup(id: string) {
      const employee = this.all.get(id);
      if (!employee) return;

      const updatedMap = new Map(this.all);
      updatedMap.set(id, { ...employee, expanded: !employee.expanded });

      this.all = updatedMap;
    },
  },
  getters: {
    employees: (state): Employee[] => {
      return state.ids.map((id) => {
        const employee = state.all.get(id);
        if (!employee)
          throw Error(`Employee with id ${id} was expected but not found`);

        return employee;
      });
    },
  },
});
