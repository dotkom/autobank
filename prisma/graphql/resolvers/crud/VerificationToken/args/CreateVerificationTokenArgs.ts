import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenCreateInput } from "../../../inputs/VerificationTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenCreateInput, {
    nullable: false
  })
  data!: VerificationTokenCreateInput;
}
