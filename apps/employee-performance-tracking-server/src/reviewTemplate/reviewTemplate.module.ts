import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewTemplateModuleBase } from "./base/reviewTemplate.module.base";
import { ReviewTemplateService } from "./reviewTemplate.service";
import { ReviewTemplateController } from "./reviewTemplate.controller";
import { ReviewTemplateResolver } from "./reviewTemplate.resolver";

@Module({
  imports: [ReviewTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewTemplateController],
  providers: [ReviewTemplateService, ReviewTemplateResolver],
  exports: [ReviewTemplateService],
})
export class ReviewTemplateModule {}
