import { FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput } from "./FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput";
import { GoalCreateNestedManyWithoutEmployeeProfilesInput } from "./GoalCreateNestedManyWithoutEmployeeProfilesInput";
import { KpiCreateNestedManyWithoutEmployeeProfilesInput } from "./KpiCreateNestedManyWithoutEmployeeProfilesInput";
import { NotificationCreateNestedManyWithoutEmployeeProfilesInput } from "./NotificationCreateNestedManyWithoutEmployeeProfilesInput";
import { PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput } from "./PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput";
import { ReportCreateNestedManyWithoutEmployeeProfilesInput } from "./ReportCreateNestedManyWithoutEmployeeProfilesInput";
import { ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput } from "./ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput";
import { TaskCreateNestedManyWithoutEmployeeProfilesInput } from "./TaskCreateNestedManyWithoutEmployeeProfilesInput";

export type EmployeeProfileCreateInput = {
  department?: string | null;
  feedbackNotes?: FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput;
  goals?: GoalCreateNestedManyWithoutEmployeeProfilesInput;
  jobRole?: string | null;
  kpis?: KpiCreateNestedManyWithoutEmployeeProfilesInput;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutEmployeeProfilesInput;
  performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput;
  reports?: ReportCreateNestedManyWithoutEmployeeProfilesInput;
  reviewTemplates?: ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput;
  tasks?: TaskCreateNestedManyWithoutEmployeeProfilesInput;
};
