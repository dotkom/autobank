import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationTokenCountOrderByAggregateInput } from "../inputs/VerificationTokenCountOrderByAggregateInput";
import { VerificationTokenMaxOrderByAggregateInput } from "../inputs/VerificationTokenMaxOrderByAggregateInput";
import { VerificationTokenMinOrderByAggregateInput } from "../inputs/VerificationTokenMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("VerificationTokenOrderByWithAggregationInput", {
  isAbstract: true
})
export class VerificationTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expires?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VerificationTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VerificationTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VerificationTokenMinOrderByAggregateInput | undefined;
}
