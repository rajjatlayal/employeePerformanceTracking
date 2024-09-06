import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  employeeProfileId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  scheduleDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
