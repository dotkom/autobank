import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReciptAvgOrderByAggregateInput } from "../inputs/ReciptAvgOrderByAggregateInput";
import { ReciptCountOrderByAggregateInput } from "../inputs/ReciptCountOrderByAggregateInput";
import { ReciptMaxOrderByAggregateInput } from "../inputs/ReciptMaxOrderByAggregateInput";
import { ReciptMinOrderByAggregateInput } from "../inputs/ReciptMinOrderByAggregateInput";
import { ReciptSumOrderByAggregateInput } from "../inputs/ReciptSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReciptOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReciptOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reimbursement?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  account_nr?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  card?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  paid_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occasion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  appendix?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReciptCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReciptCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReciptAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ReciptAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReciptMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReciptMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReciptMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReciptMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReciptSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ReciptSumOrderByAggregateInput | undefined;
}
