import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OnlinepottenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OnlinepottenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OnlinepottenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OnlinepottenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OnlinepottenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OnlinepottenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  occation?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  planned_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  hours?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  participants?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  payment_method?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  recipt_id?: IntNullableWithAggregatesFilter | undefined;
}
