import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenUpdateInput } from "../../../inputs/VerificationTokenUpdateInput";
import { VerificationTokenWhereUniqueInput } from "../../../inputs/VerificationTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenUpdateInput, {
    nullable: false
  })
  data!: VerificationTokenUpdateInput;

  @TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput, {
    nullable: false
  })
  where!: VerificationTokenWhereUniqueInput;
}
