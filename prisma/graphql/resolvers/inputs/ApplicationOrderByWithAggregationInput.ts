import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCountOrderByAggregateInput } from "../inputs/ApplicationCountOrderByAggregateInput";
import { ApplicationMaxOrderByAggregateInput } from "../inputs/ApplicationMaxOrderByAggregateInput";
import { ApplicationMinOrderByAggregateInput } from "../inputs/ApplicationMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ApplicationOrderByWithAggregationInput", {
  isAbstract: true
})
export class ApplicationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  full_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  approved_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  approvedById?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_updated?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  comments?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  error?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  error_fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ApplicationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ApplicationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ApplicationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ApplicationMinOrderByAggregateInput | undefined;
}
