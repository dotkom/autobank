import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationTokenOrderByWithAggregationInput } from "../../../inputs/VerificationTokenOrderByWithAggregationInput";
import { VerificationTokenScalarWhereWithAggregatesInput } from "../../../inputs/VerificationTokenScalarWhereWithAggregatesInput";
import { VerificationTokenWhereInput } from "../../../inputs/VerificationTokenWhereInput";
import { VerificationTokenScalarFieldEnum } from "../../../../enums/VerificationTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVerificationTokenArgs {
  @TypeGraphQL.Field(_type => VerificationTokenWhereInput, {
    nullable: true
  })
  where?: VerificationTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VerificationTokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"identifier" | "token" | "expires">;

  @TypeGraphQL.Field(_type => VerificationTokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VerificationTokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
