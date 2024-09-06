import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FeedbackNoteTitle } from "../feedbackNote/FeedbackNoteTitle";
import { GoalTitle } from "../goal/GoalTitle";
import { KpiTitle } from "../kpi/KpiTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { PerformanceReviewTitle } from "../performanceReview/PerformanceReviewTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ReviewTemplateTitle } from "../reviewTemplate/ReviewTemplateTitle";
import { TaskTitle } from "../task/TaskTitle";

export const EmployeeProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="department" source="department" />
        <ReferenceArrayInput
          source="feedbackNotes"
          reference="FeedbackNote"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackNoteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="goals"
          reference="Goal"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GoalTitle} />
        </ReferenceArrayInput>
        <TextInput label="jobRole" source="jobRole" />
        <ReferenceArrayInput
          source="kpis"
          reference="Kpi"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={KpiTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="performanceReviews"
          reference="PerformanceReview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PerformanceReviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reviewTemplates"
          reference="ReviewTemplate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTemplateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tasks"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
