import { Injectable } from "@nestjs/common";
import { NotificationCreateInput } from "../notification/base/NotificationCreateInput";
import { Notification } from "../notification/base/Notification";
import { NotificationFindManyArgs } from "../notification/base/NotificationFindManyArgs";

@Injectable()
export class AutomatedNotificationsService {
  constructor() {}
  async CreateNotification(args: NotificationCreateInput): Promise<Notification> {
    throw new Error("Not implemented");
  }
  async GetNotifications(args: NotificationFindManyArgs): Promise<Notification[]> {
    throw new Error("Not implemented");
  }
}
