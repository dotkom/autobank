import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenAvgOrderByAggregateInput } from "../inputs/OnlinepottenAvgOrderByAggregateInput";
import { OnlinepottenCountOrderByAggregateInput } from "../inputs/OnlinepottenCountOrderByAggregateInput";
import { OnlinepottenMaxOrderByAggregateInput } from "../inputs/OnlinepottenMaxOrderByAggregateInput";
import { OnlinepottenMinOrderByAggregateInput } from "../inputs/OnlinepottenMinOrderByAggregateInput";
import { OnlinepottenSumOrderByAggregateInput } from "../inputs/OnlinepottenSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OnlinepottenOrderByWithAggregationInput", {
  isAbstract: true
})
export class OnlinepottenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  planned_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hours?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  participants?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  recipt_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OnlinepottenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OnlinepottenAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OnlinepottenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OnlinepottenMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OnlinepottenSumOrderByAggregateInput | undefined;
}
