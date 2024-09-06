import { Module } from "@nestjs/common";
import { ReviewTemplatesService } from "./reviewtemplates.service";
import { ReviewTemplatesController } from "./reviewtemplates.controller";
import { ReviewTemplatesResolver } from "./reviewtemplates.resolver";

@Module({
  controllers: [ReviewTemplatesController],
  providers: [ReviewTemplatesService, ReviewTemplatesResolver],
  exports: [ReviewTemplatesService],
})
export class ReviewTemplatesModule {}
