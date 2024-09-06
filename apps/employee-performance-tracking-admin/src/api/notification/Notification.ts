import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type Notification = {
  createdAt: Date;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  message: string | null;
  scheduleDate: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
