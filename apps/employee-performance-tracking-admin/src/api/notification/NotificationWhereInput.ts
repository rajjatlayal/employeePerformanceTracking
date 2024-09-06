import { EmployeeProfileWhereUniqueInput } from "../employeeProfile/EmployeeProfileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NotificationWhereInput = {
  employeeProfile?: EmployeeProfileWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  scheduleDate?: DateTimeNullableFilter;
  typeField?: "Option1";
};
