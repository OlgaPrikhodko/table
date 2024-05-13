type HealthCheckStatus = "valid" | "expired" | "canceled";

export type Employee = {
  employeeId: string;
  title: string;
  code: string | null;
  expiration: string | null;
  status: HealthCheckStatus | null;
  department: string | null;
  userStatus: string | null;
  jobTitle: string | null;
  healthCheckId: string | null;
  children: Employee[];
  expanded: boolean;
  checked: boolean;
};

export type EmployeeData = {
  employeeId: string;
  firstName: string;
  lastName: string;
  department: string;
  isDisabled: boolean;
  jobTitleId: string;
  jobTitleName: string;
  personnelId: null;
  managerId: string;
  managerDisplayName: string;
  totalHealthChecksCount: number;
  cancelledHealthChecksCount: number;
  activeValidHealthChecksCount: number;
  activeExpiredHealthChecksCount: number;
  healthCheckStatus: "valid" | "expired" | "canceled";
  healthCheckId: null | string;
  healthCheckTypeId: null | string;
  healthCheckCardId: null | string;
  typeCode: null | string;
  typeName: null | string;
  validityStartDate: null | string;
  validityExpirationDate: null | string;
  isCancelled: null | string;
  createdOn: null | string;
};

export type EmpoyeeDataType = {
  employees: EmployeeData[];
  total: number;
};
