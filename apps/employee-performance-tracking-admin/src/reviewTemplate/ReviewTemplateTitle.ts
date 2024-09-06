import { ReviewTemplate as TReviewTemplate } from "../api/reviewTemplate/ReviewTemplate";

export const REVIEWTEMPLATE_TITLE_FIELD = "name";

export const ReviewTemplateTitle = (record: TReviewTemplate): string => {
  return record.name?.toString() || String(record.id);
};
