import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";

export type ReviewTemplateUpdateInput = {
  department?: string | null;
  employeeProfile?: EmployeeProfileWhereUniqueInput | null;
  name?: string | null;
  role?: string | null;
  templateContent?: string | null;
};
