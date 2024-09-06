import { FeedbackNoteUpdateManyWithoutEmployeeProfilesInput } from "./FeedbackNoteUpdateManyWithoutEmployeeProfilesInput";
import { GoalUpdateManyWithoutEmployeeProfilesInput } from "./GoalUpdateManyWithoutEmployeeProfilesInput";
import { KpiUpdateManyWithoutEmployeeProfilesInput } from "./KpiUpdateManyWithoutEmployeeProfilesInput";
import { NotificationUpdateManyWithoutEmployeeProfilesInput } from "./NotificationUpdateManyWithoutEmployeeProfilesInput";
import { PerformanceReviewUpdateManyWithoutEmployeeProfilesInput } from "./PerformanceReviewUpdateManyWithoutEmployeeProfilesInput";
import { ReportUpdateManyWithoutEmployeeProfilesInput } from "./ReportUpdateManyWithoutEmployeeProfilesInput";
import { ReviewTemplateUpdateManyWithoutEmployeeProfilesInput } from "./ReviewTemplateUpdateManyWithoutEmployeeProfilesInput";
import { TaskUpdateManyWithoutEmployeeProfilesInput } from "./TaskUpdateManyWithoutEmployeeProfilesInput";

export type EmployeeProfileUpdateInput = {
  department?: string | null;
  feedbackNotes?: FeedbackNoteUpdateManyWithoutEmployeeProfilesInput;
  goals?: GoalUpdateManyWithoutEmployeeProfilesInput;
  jobRole?: string | null;
  kpis?: KpiUpdateManyWithoutEmployeeProfilesInput;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutEmployeeProfilesInput;
  performanceReviews?: PerformanceReviewUpdateManyWithoutEmployeeProfilesInput;
  reports?: ReportUpdateManyWithoutEmployeeProfilesInput;
  reviewTemplates?: ReviewTemplateUpdateManyWithoutEmployeeProfilesInput;
  tasks?: TaskUpdateManyWithoutEmployeeProfilesInput;
};
