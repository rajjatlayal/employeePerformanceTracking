/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PerformanceReviewWhereInput } from "./PerformanceReviewWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PerformanceReviewCountArgs {
  @ApiProperty({
    required: false,
    type: () => PerformanceReviewWhereInput,
  })
  @Field(() => PerformanceReviewWhereInput, { nullable: true })
  @Type(() => PerformanceReviewWhereInput)
  where?: PerformanceReviewWhereInput;
}

export { PerformanceReviewCountArgs as PerformanceReviewCountArgs };
