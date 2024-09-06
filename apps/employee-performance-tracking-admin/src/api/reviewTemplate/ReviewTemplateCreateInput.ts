import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type ReviewTemplateCreateInput = {
  department?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  name?: string | null;
  role?: string | null;
  templateContent?: string | null;
};
