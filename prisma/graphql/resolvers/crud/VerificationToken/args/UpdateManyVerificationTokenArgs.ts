import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenUpdateManyMutationInput } from "../../../inputs/VerificationTokenUpdateManyMutationInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: VerificationTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => VerificationTokenWhereInput, {
    nullable: true
  })
  where?: VerificationTokenWhereInput | undefined;
}
