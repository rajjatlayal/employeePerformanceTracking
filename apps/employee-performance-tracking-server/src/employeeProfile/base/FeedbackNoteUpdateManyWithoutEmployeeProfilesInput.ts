/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FeedbackNoteWhereUniqueInput } from "../../feedbackNote/base/FeedbackNoteWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FeedbackNoteUpdateManyWithoutEmployeeProfilesInput {
  @Field(() => [FeedbackNoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackNoteWhereUniqueInput],
  })
  connect?: Array<FeedbackNoteWhereUniqueInput>;

  @Field(() => [FeedbackNoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackNoteWhereUniqueInput],
  })
  disconnect?: Array<FeedbackNoteWhereUniqueInput>;

  @Field(() => [FeedbackNoteWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FeedbackNoteWhereUniqueInput],
  })
  set?: Array<FeedbackNoteWhereUniqueInput>;
}

export { FeedbackNoteUpdateManyWithoutEmployeeProfilesInput as FeedbackNoteUpdateManyWithoutEmployeeProfilesInput };
