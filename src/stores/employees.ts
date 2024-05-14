import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";
import { getEmployees } from "@/lib/getEmployees";

type HeaderTitle = { name: keyof Employee; title: string; width: number };

export const headerTitles: HeaderTitle[] = [
  { name: "title", title: "Full name / Health check", width: 300 },
  { name: "code", title: "Code", width: 100 },
  { name: "expiration", title: "Expiration", width: 120 },
  { name: "status", title: "Status", width: 100 },
  { name: "department", title: "Department", width: 120 },
  { name: "userStatus", title: "User status", width: 100 },
  { name: "jobTitle", title: "Job title", width: 150 },
];

type EmployeeState = {
  ids: string[];
  all: Map<string, Employee>;
  headerTitles: HeaderTitle[];
};

export const useEmployeesStore = defineStore("employeesStore", {
  state: (): EmployeeState => ({
    ids: [],
    all: new Map(),
    headerTitles: headerTitles,
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
    setAllEmployeersChecked(checkedValue: boolean) {
      const updatedMap = new Map(this.all);
      for (const [id, employee] of updatedMap.entries()) {
        const updatedEmployee = this.setEmployeeAndChildrenChecked(
          employee,
          checkedValue
        );
        updatedMap.set(id, updatedEmployee);
      }
      this.all = updatedMap;
    },

    setEmployeeAndChildrenChecked(
      employee: Employee,
      checked: boolean
    ): Employee {
      const updatedEmployee = { ...employee, checked };

      // Recursively update children
      if (updatedEmployee.children) {
        updatedEmployee.children = updatedEmployee.children.map((child) =>
          this.setEmployeeAndChildrenChecked(child, checked)
        );
      }

      return updatedEmployee;
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
