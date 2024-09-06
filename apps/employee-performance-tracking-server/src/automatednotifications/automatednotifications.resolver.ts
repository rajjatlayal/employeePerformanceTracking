import * as graphql from "@nestjs/graphql";
import { NotificationCreateInput } from "../notification/base/NotificationCreateInput";
import { Notification } from "../notification/base/Notification";
import { NotificationFindManyArgs } from "../notification/base/NotificationFindManyArgs";
import { AutomatedNotificationsService } from "./automatednotifications.service";

export class AutomatedNotificationsResolver {
  constructor(protected readonly service: AutomatedNotificationsService) {}

  @graphql.Mutation(() => Notification)
  async CreateNotification(
    @graphql.Args()
    args: NotificationCreateInput
  ): Promise<Notification> {
    return this.service.CreateNotification(args);
  }

  @graphql.Query(() => [Notification])
  async GetNotifications(
    @graphql.Args()
    args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.service.GetNotifications(args);
  }
}
