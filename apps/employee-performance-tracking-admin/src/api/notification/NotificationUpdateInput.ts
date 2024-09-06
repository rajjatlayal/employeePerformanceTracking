import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type NotificationUpdateInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  message?: string | null;
  scheduleDate?: Date | null;
  typeField?: "Option1" | null;
};
