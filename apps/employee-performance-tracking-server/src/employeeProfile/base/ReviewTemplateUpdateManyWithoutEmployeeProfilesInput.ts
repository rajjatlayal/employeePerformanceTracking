/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ReviewTemplateWhereUniqueInput } from "../../reviewTemplate/base/ReviewTemplateWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ReviewTemplateUpdateManyWithoutEmployeeProfilesInput {
  @Field(() => [ReviewTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewTemplateWhereUniqueInput],
  })
  connect?: Array<ReviewTemplateWhereUniqueInput>;

  @Field(() => [ReviewTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewTemplateWhereUniqueInput],
  })
  disconnect?: Array<ReviewTemplateWhereUniqueInput>;

  @Field(() => [ReviewTemplateWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ReviewTemplateWhereUniqueInput],
  })
  set?: Array<ReviewTemplateWhereUniqueInput>;
}

export { ReviewTemplateUpdateManyWithoutEmployeeProfilesInput as ReviewTemplateUpdateManyWithoutEmployeeProfilesInput };
