import { FeedbackNote } from "../feedbackNote/FeedbackNote";
import { Goal } from "../goal/Goal";
import { Kpi } from "../kpi/Kpi";
import { Notification } from "../notification/Notification";
import { PerformanceReview } from "../performanceReview/PerformanceReview";
import { Report } from "../report/Report";
import { ReviewTemplate } from "../reviewTemplate/ReviewTemplate";
import { Task } from "../task/Task";

export type EmployeeProfile = {
  createdAt: Date;
  department: string | null;
  feedbackNotes?: Array<FeedbackNote>;
  goals?: Array<Goal>;
  id: string;
  jobRole: string | null;
  kpis?: Array<Kpi>;
  name: string | null;
  notifications?: Array<Notification>;
  performanceReviews?: Array<PerformanceReview>;
  reports?: Array<Report>;
  reviewTemplates?: Array<ReviewTemplate>;
  tasks?: Array<Task>;
  updatedAt: Date;
};
