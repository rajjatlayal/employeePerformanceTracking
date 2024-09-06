import { Module } from "@nestjs/common";
import { AutomatedNotificationsService } from "./automatednotifications.service";
import { AutomatedNotificationsController } from "./automatednotifications.controller";
import { AutomatedNotificationsResolver } from "./automatednotifications.resolver";

@Module({
  controllers: [AutomatedNotificationsController],
  providers: [AutomatedNotificationsService, AutomatedNotificationsResolver],
  exports: [AutomatedNotificationsService],
})
export class AutomatedNotificationsModule {}
