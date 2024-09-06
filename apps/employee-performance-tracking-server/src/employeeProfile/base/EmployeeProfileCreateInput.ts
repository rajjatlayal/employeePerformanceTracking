/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput } from "./FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput";
import { Type } from "class-transformer";
import { GoalCreateNestedManyWithoutEmployeeProfilesInput } from "./GoalCreateNestedManyWithoutEmployeeProfilesInput";
import { KpiCreateNestedManyWithoutEmployeeProfilesInput } from "./KpiCreateNestedManyWithoutEmployeeProfilesInput";
import { NotificationCreateNestedManyWithoutEmployeeProfilesInput } from "./NotificationCreateNestedManyWithoutEmployeeProfilesInput";
import { PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput } from "./PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput";
import { ReportCreateNestedManyWithoutEmployeeProfilesInput } from "./ReportCreateNestedManyWithoutEmployeeProfilesInput";
import { ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput } from "./ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput";
import { TaskCreateNestedManyWithoutEmployeeProfilesInput } from "./TaskCreateNestedManyWithoutEmployeeProfilesInput";

@InputType()
class EmployeeProfileCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  department?: string | null;

  @ApiProperty({
    required: false,
    type: () => FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  feedbackNotes?: FeedbackNoteCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: () => GoalCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => GoalCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => GoalCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  goals?: GoalCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  jobRole?: string | null;

  @ApiProperty({
    required: false,
    type: () => KpiCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => KpiCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => KpiCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  kpis?: KpiCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => NotificationCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => NotificationCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => NotificationCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  notifications?: NotificationCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: () => PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  performanceReviews?: PerformanceReviewCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: () => ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  reviewTemplates?: ReviewTemplateCreateNestedManyWithoutEmployeeProfilesInput;

  @ApiProperty({
    required: false,
    type: () => TaskCreateNestedManyWithoutEmployeeProfilesInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutEmployeeProfilesInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutEmployeeProfilesInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutEmployeeProfilesInput;
}

export { EmployeeProfileCreateInput as EmployeeProfileCreateInput };
