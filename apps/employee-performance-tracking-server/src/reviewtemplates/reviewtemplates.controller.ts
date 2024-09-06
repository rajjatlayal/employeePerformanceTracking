import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReviewTemplatesService } from "./reviewtemplates.service";
import { NotificationWhereUniqueInput } from "../notification/base/NotificationWhereUniqueInput";
import { Notification } from "../notification/base/Notification";

@swagger.ApiTags("reviewTemplates")
@common.Controller("reviewTemplates")
export class ReviewTemplatesController {
  constructor(protected readonly service: ReviewTemplatesService) {}

  @common.Post("/review-templates")
  @swagger.ApiOkResponse({
    type: Notification
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateReviewTemplate(
    @common.Body()
    body: NotificationWhereUniqueInput
  ): Promise<Notification> {
        return this.service.CreateReviewTemplate(body);
      }

  @common.Get("/review-templates")
  @swagger.ApiOkResponse({
    type: Notification
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetReviewTemplates(
    @common.Body()
    body: NotificationWhereUniqueInput
  ): Promise<Notification[]> {
        return this.service.GetReviewTemplates(body);
      }

  @common.Put("/review-templates/:id")
  @swagger.ApiOkResponse({
    type: Notification
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateReviewTemplate(
    @common.Body()
    body: NotificationWhereUniqueInput
  ): Promise<Notification> {
        return this.service.UpdateReviewTemplate(body);
      }
}
