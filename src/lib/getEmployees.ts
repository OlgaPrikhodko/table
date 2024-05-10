import type { Employee, EmpoyeeDataType } from "./types";

import jsonData from "@/lib/data.json";

function getEmployees() {
  const employeeIds = [];
  const employeesMap = new Map<string, Employee>();

  const data = jsonData as EmpoyeeDataType;

  for (const employee of data.employees) {
    employeeIds.push(employee.employeeId);

    const newItem: Employee = {
      employeeId: employee.employeeId,
      title: `${employee.firstName} ${employee.lastName} ...`,
      code: employee.typeCode,
      expiration: employee.validityExpirationDate,
      status: employee.validityExpirationDate ? "Valid" : null,
      department: employee.department,
      userStatus: employee.isDisabled !== null ? "Active" : null,
      jobTitle: employee.jobTitleName,
      healthCheckId: employee.healthCheckId,
      children: [],
      expanded: true,
    };
    if (!employeesMap.has(employee.employeeId)) {
      employeesMap.set(employee.employeeId, newItem);
    } else {
      const employeeParent = employeesMap.get(employee.employeeId);
      if (employeeParent) {
        employeeParent.children.push({
          ...newItem,
          title: employee.typeName || "Undefined title",
          department: null,
          userStatus: null,
          jobTitle: null,
          expanded: false,
        });
      }
    }
  }

  return { employeeIds, employees: employeesMap, total: jsonData.total };
}

export { getEmployees };
