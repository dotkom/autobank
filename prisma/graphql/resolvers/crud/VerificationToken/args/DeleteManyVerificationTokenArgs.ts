import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenWhereInput, {
    nullable: true
  })
  where?: VerificationTokenWhereInput | undefined;
}
