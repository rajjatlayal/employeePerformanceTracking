import { Injectable } from "@nestjs/common";
import { Notification } from "../notification/base/Notification";
import { NotificationFindManyArgs } from "../notification/base/NotificationFindManyArgs";
import { NotificationWhereUniqueInput } from "../notification/base/NotificationWhereUniqueInput";

@Injectable()
export class ReviewTemplatesService {
  constructor() {}
  async CreateReviewTemplate(args: Notification): Promise<Notification> {
    throw new Error("Not implemented");
  }
  async GetReviewTemplates(args: NotificationFindManyArgs): Promise<Notification[]> {
    throw new Error("Not implemented");
  }
  async UpdateReviewTemplate(args: NotificationWhereUniqueInput): Promise<Notification> {
    throw new Error("Not implemented");
  }
}
