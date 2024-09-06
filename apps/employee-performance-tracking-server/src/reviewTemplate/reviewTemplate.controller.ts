import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewTemplateService } from "./reviewTemplate.service";
import { ReviewTemplateControllerBase } from "./base/reviewTemplate.controller.base";

@swagger.ApiTags("reviewTemplates")
@common.Controller("reviewTemplates")
export class ReviewTemplateController extends ReviewTemplateControllerBase {
  constructor(
    protected readonly service: ReviewTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
