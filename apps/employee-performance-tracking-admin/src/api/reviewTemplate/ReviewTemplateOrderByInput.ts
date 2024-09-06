import { SortOrder } from "../../util/SortOrder";

export type ReviewTemplateOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  templateContent?: SortOrder;
  updatedAt?: SortOrder;
};
