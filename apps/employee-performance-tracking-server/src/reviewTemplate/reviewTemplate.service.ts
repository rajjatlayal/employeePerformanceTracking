import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewTemplateServiceBase } from "./base/reviewTemplate.service.base";

@Injectable()
export class ReviewTemplateService extends ReviewTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
