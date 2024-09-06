import * as graphql from "@nestjs/graphql";
import { Notification } from "../notification/base/Notification";
import { NotificationFindManyArgs } from "../notification/base/NotificationFindManyArgs";
import { NotificationWhereUniqueInput } from "../notification/base/NotificationWhereUniqueInput";
import { ReviewTemplatesService } from "./reviewtemplates.service";

export class ReviewTemplatesResolver {
  constructor(protected readonly service: ReviewTemplatesService) {}

  @graphql.Mutation(() => Notification)
  async CreateReviewTemplate(
    @graphql.Args()
    args: Notification
  ): Promise<Notification> {
    return this.service.CreateReviewTemplate(args);
  }

  @graphql.Query(() => [Notification])
  async GetReviewTemplates(
    @graphql.Args()
    args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.service.GetReviewTemplates(args);
  }

  @graphql.Mutation(() => Notification)
  async UpdateReviewTemplate(
    @graphql.Args()
    args: NotificationWhereUniqueInput
  ): Promise<Notification> {
    return this.service.UpdateReviewTemplate(args);
  }
}
