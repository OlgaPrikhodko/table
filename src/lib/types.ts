export type Employee = {
  employeeId: string;
  title: string;
  code: string | null;
  expiration: string | null;
  status: string | null;
  department: string | null;
  userStatus: string | null;
  jobTitle: string | null;
  expanded: boolean;
  healthCheckId: string | null;
  children: Employee[];
};

export type Employee1 = {
  employeeId: string;
  title: string;
  code: string;
  expiration: string;
  healthCheckId: string;
  userStatus: "active";
  healthCheckType:
    | "Not Drinking"
    | "Standart Office Worker Health Check"
    | "Health booklet";
  healthCheckStatus: "valid" | "expired" | "canceled";
  department: string;
  jobTitleName: string;
  personnelId: number;
  managerDisplayName: string;
  expanded: boolean;
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

// {
//   "employeeId": "0595bf7c-6c9e-4efa-a898-08dbb2df159f",
//   "firstName": "Benediktas",
//   "lastName": "Šimonis",
//   "department": "Excel",
//   "isDisabled": false,
//   "jobTitleId": "3f8c2bbd-b650-ee11-9937-000d3a2a9c06",
//   "jobTitleName": "Statybininkas",
//   "personnelId": null,
//   "managerId": "565ceb98-542e-43a8-3b56-08dba4a5cba9",
//   "managerDisplayName": "Nojus Šimonis",
//   "totalHealthChecksCount": 0,
//   "cancelledHealthChecksCount": 0,
//   "activeValidHealthChecksCount": 0,
//   "activeExpiredHealthChecksCount": 0,
//   "healthCheckId": null,
//   "healthCheckTypeId": null,
//   "healthCheckCardId": null,
//   "typeCode": null,
//   "typeName": null,
//   "validityStartDate": null,
//   "validityExpirationDate": null,
//   "isCancelled": null,
//   "createdOn": null
// },

// {
// "employeeId": "0595bf7c-6c9e-4efa-a898-08dbb2df161f",
// "firstName": "Darth",
// "lastName": "Vader",
// "healthCheckId": "0001",
// "healthCheckType": "Not Drinking",
// "healthCheckStatus": "valid",
// "expiration": "2024-12-28",
// "status": "valid",
// "department": "Tatooine",
// "userStatus": "Active",
// "jobTitleName": "Statybininkas",
// "personnelId": "833922",
// "managerDisplayName": "Vader Vader"
// },
// {
// "employeeId": "0595bf7c-6c9e-4efa-a898-08dbb2df161f",
// "firstName": "Darth",
// "lastName": "Vader",
// "healthCheckId": "0002",
// "healthCheckType": "Standart Office Worker Health Check",
// "healthCheckStatus": "expired",
// "expiration": "2024-12-28",
// "status": "valid",
// "department": "Tatooine",
// "userStatus": "Active",
// "jobTitleName": "Statybininkas",
// "personnelId": "833922",
// "managerDisplayName": "Vader Vader"
// },
// {
// "employeeId": "0595bf7c-6c9e-4efa-a898-08dbb2df161f",
// "firstName": "Darth",
// "lastName": "Vader",
// "healthCheckId": "0003",
// "healthCheckType": "Health booklet",
// "healthCheckStatus": "canceled",
// "expiration": "2024-12-28",
// "status": "valid",
// "department": "Tatooine",
// "userStatus": "Active",
// "jobTitleName": "Statybininkas",
// "personnelId": "833922",
// "managerDisplayName": "Vader Vader"
// }

// const sampleData = [
//   {
//     employeeId: "0595bf7c-6c9e-4efa-a898-08dbb2df159f",
//     firstName: "Luke",
//     lastName: "Skywalker",
//     department: "Tatooine",
//     isDisabled: false,
//     jobTitleId: "3f8c2bbd-b650-ee11-9937-000d3a2a9c06",
//     jobTitleName: "Statybininkas",
//     personnelId: null,
//     managerId: "565ceb98-542e-43a8-3b56-08dba4a5cba9",
//     managerDisplayName: "Nojus Šimonis",
//     totalHealthChecksCount: 0,
//     cancelledHealthChecksCount: 0,
//     activeValidHealthChecksCount: 0,
//     activeExpiredHealthChecksCount: 0,
//     healthCheckId: null,
//     healthCheckTypeId: null,
//     healthCheckCardId: null,
//     typeCode: null,
//     typeName: null,
//     validityStartDate: null,
//     validityExpirationDate: null,
//     isCancelled: null,
//     createdOn: null,
//   },
//   {
//     employeeId: "0595bf7c-6c9e-4efa-a898-08dbb2df160f",
//     firstName: "Leia",
//     lastName: "Organa",
//     department: "Alderaan",
//     isDisabled: false,
//     jobTitleId: "3f8c2bbd-b650-ee11-9937-000d3a2a9c06",
//     jobTitleName: "Statybininkas",
//     personnelId: null,
//     managerId: "565ceb98-542e-43a8-3b56-08dba4a5cba9",
//     managerDisplayName: "Nojus Šimonis",
//     totalHealthChecksCount: 0,
//     cancelledHealthChecksCount: 0,
//     activeValidHealthChecksCount: 0,
//     activeExpiredHealthChecksCount: 0,
//     healthCheckId: null,
//     healthCheckTypeId: null,
//     healthCheckCardId: null,
//     typeCode: null,
//     typeName: null,
//     validityStartDate: null,
//     validityExpirationDate: null,
//     isCancelled: null,
//     createdOn: null,
//   },
//   {
//     employeeId: "0595bf7c-6c9e-4efa-a898-08dbb2df161f",
//     firstName: "Darth",
//     lastName: "Vader",
//     department: "Tatooine",
//     isDisabled: false,
//     jobTitleId: "3f8c2bbd-b650-ee11-9937-000d3a2a9c06",
//     jobTitleName: "Statybininkas",
//     personnelId: null,
//     managerId: "565ceb98-542e-43a8-3b56-08dba4a5cba9",
//     managerDisplayName: "Nojus Šimonis",
//     totalHealthChecksCount: 0,
//     cancelledHealthChecksCount: 0,
//     activeValidHealthChecksCount: 0,
//     activeExpiredHealthChecksCount: 0,
//     healthCheckId: null,
//     healthCheckTypeId: null,
//     healthCheckCardId: null,
//     typeCode: null,
//     typeName: null,
//     validityStartDate: null,
//     validityExpirationDate: null,
//     isCancelled: null,
//     createdOn: null,
//   },
// ];
