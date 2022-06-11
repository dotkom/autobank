import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("InvoiceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class InvoiceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [InvoiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: InvoiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: InvoiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoiceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: InvoiceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  orgnr?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  occasion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  method?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  po_nr?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  duedays?: IntWithAggregatesFilter | undefined;
}
