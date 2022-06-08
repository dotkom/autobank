import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceAvgOrderByAggregateInput } from "../inputs/InvoiceAvgOrderByAggregateInput";
import { InvoiceCountOrderByAggregateInput } from "../inputs/InvoiceCountOrderByAggregateInput";
import { InvoiceMaxOrderByAggregateInput } from "../inputs/InvoiceMaxOrderByAggregateInput";
import { InvoiceMinOrderByAggregateInput } from "../inputs/InvoiceMinOrderByAggregateInput";
import { InvoiceSumOrderByAggregateInput } from "../inputs/InvoiceSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("InvoiceOrderByWithAggregationInput", {
  isAbstract: true
})
export class InvoiceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orgnr?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occasion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  method?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  po_nr?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  duedays?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => InvoiceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: InvoiceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: InvoiceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: InvoiceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: InvoiceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: InvoiceSumOrderByAggregateInput | undefined;
}
