import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenOrderByWithRelationInput } from "../../../inputs/VerificationTokenOrderByWithRelationInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";
import { VerificationTokenWhereUniqueInput } from "../../../inputs/VerificationTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenWhereInput, {
    nullable: true
  })
  where?: VerificationTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VerificationTokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: VerificationTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
