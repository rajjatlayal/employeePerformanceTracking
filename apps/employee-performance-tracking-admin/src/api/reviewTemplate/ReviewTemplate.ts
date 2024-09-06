import { EmployeeProfile } from "../employeeProfile/EmployeeProfile";

export type ReviewTemplate = {
  createdAt: Date;
  department: string | null;
  employeeProfile?: EmployeeProfile | null;
  id: string;
  name: string | null;
  role: string | null;
  templateContent: string | null;
  updatedAt: Date;
};
