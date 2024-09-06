import { ReviewTemplateWhereInput } from "./ReviewTemplateWhereInput";
import { ReviewTemplateOrderByInput } from "./ReviewTemplateOrderByInput";

export type ReviewTemplateFindManyArgs = {
  where?: ReviewTemplateWhereInput;
  orderBy?: Array<ReviewTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
