import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenCreateManyInput } from "../../../inputs/VerificationTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyVerificationTokenArgs {
  @TypeGraphQL.Field(_type => [VerificationTokenCreateManyInput], {
    nullable: false
  })
  data!: VerificationTokenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
