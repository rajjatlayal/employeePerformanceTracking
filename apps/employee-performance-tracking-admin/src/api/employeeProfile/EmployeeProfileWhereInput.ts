import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackNoteListRelationFilter } from "../feedbackNote/FeedbackNoteListRelationFilter";
import { GoalListRelationFilter } from "../goal/GoalListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { KpiListRelationFilter } from "../kpi/KpiListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { PerformanceReviewListRelationFilter } from "../performanceReview/PerformanceReviewListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { ReviewTemplateListRelationFilter } from "../reviewTemplate/ReviewTemplateListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type EmployeeProfileWhereInput = {
  department?: StringNullableFilter;
  feedbackNotes?: FeedbackNoteListRelationFilter;
  goals?: GoalListRelationFilter;
  id?: StringFilter;
  jobRole?: StringNullableFilter;
  kpis?: KpiListRelationFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  performanceReviews?: PerformanceReviewListRelationFilter;
  reports?: ReportListRelationFilter;
  reviewTemplates?: ReviewTemplateListRelationFilter;
  tasks?: TaskListRelationFilter;
};
