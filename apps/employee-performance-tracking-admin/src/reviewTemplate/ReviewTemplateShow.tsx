import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { EMPLOYEEPROFILE_TITLE_FIELD } from "../employeeProfile/EmployeeProfileTitle";

export const ReviewTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="department" source="department" />
        <ReferenceField
          label="EmployeeProfile"
          source="employeeprofile.id"
          reference="EmployeeProfile"
        >
          <TextField source={EMPLOYEEPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="role" source="role" />
        <TextField label="templateContent" source="templateContent" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
