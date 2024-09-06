import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewTemplateResolverBase } from "./base/reviewTemplate.resolver.base";
import { ReviewTemplate } from "./base/ReviewTemplate";
import { ReviewTemplateService } from "./reviewTemplate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewTemplate)
export class ReviewTemplateResolver extends ReviewTemplateResolverBase {
  constructor(
    protected readonly service: ReviewTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
