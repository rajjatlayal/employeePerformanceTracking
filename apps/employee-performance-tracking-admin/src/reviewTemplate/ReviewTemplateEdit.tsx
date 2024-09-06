import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EmployeeProfileTitle } from "../employeeProfile/EmployeeProfileTitle";

export const ReviewTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="department" source="department" />
        <ReferenceInput
          source="employeeProfile.id"
          reference="EmployeeProfile"
          label="EmployeeProfile"
        >
          <SelectInput optionText={EmployeeProfileTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="role" source="role" />
        <TextInput label="templateContent" multiline source="templateContent" />
      </SimpleForm>
    </Edit>
  );
};
