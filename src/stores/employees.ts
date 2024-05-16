import type { Employee } from "@/lib/types";
import { defineStore } from "pinia";
import { getEmployees } from "@/lib/getEmployees";

type EmployeeState = {
  ids: string[];
  all: Map<string, Employee>;
};

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

    setEmployeeItemChecked(
      parentId: string,
      childId: string | null,
      checkedValue: boolean
    ) {
      const updatedMap = new Map(this.all);

      const employee = this.all.get(parentId);
      if (!employee)
        throw Error(`Employee with id ${parentId} was expected but not found`);

      // If childId is not provided, update the parent employee and all its children
      if (!childId) {
        const updatedEmployee = this.setEmployeeAndChildrenChecked(
          employee,
          checkedValue
        );
        updatedMap.set(parentId, updatedEmployee);
      } else {
        // update the specific child
        const updatedChildren = employee.children.map((child) =>
          child.healthCheckId === childId
            ? { ...child, checked: checkedValue }
            : child
        );

        // Determine the new checked and indeterminate state of the parent employee
        const updatedChecked = updatedChildren.every((item) => item.checked);

        const updatedIndeterminated =
          !updatedChecked && updatedChildren.some((item) => item.checked);

        const updatedEmployee = {
          ...employee,
          children: updatedChildren,
          checked: updatedChecked,
          indeterminate: updatedIndeterminated,
        };

        updatedMap.set(parentId, updatedEmployee);
      }

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
    getCheckedState(state): boolean {
      return this.employees.every((employee) => employee.checked);
    },
    getIndeterminatedState(state): boolean {
      return (
        !this.getCheckedState &&
        this.employees.some((employee) => employee.checked)
      );
    },
  },
});
