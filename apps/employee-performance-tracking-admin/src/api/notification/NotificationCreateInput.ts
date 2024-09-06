import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type NotificationCreateInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  message?: string | null;
  scheduleDate?: Date | null;
  typeField?: "Option1" | null;
};
