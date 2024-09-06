import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ReviewTemplateWhereInput = {
  department?: StringNullableFilter;
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  templateContent?: StringNullableFilter;
};
