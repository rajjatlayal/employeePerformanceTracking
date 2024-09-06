import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AutomatedNotificationsService } from "./automatednotifications.service";
import { NotificationFindManyArgs } from "../notification/base/NotificationFindManyArgs";
import { Notification } from "../notification/base/Notification";

@swagger.ApiTags("automatedNotifications")
@common.Controller("automatedNotifications")
export class AutomatedNotificationsController {
  constructor(protected readonly service: AutomatedNotificationsService) {}

  @common.Post("/notifications")
  @swagger.ApiOkResponse({
    type: Notification
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateNotification(
    @common.Body()
    body: NotificationFindManyArgs
  ): Promise<Notification> {
        return this.service.CreateNotification(body);
      }

  @common.Get("/notifications")
  @swagger.ApiOkResponse({
    type: Notification
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetNotifications(
    @common.Body()
    body: NotificationFindManyArgs
  ): Promise<Notification[]> {
        return this.service.GetNotifications(body);
      }
}
