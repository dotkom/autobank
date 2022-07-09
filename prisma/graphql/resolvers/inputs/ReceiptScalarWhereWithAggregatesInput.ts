import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { EnumreceiptTypeWithAggregatesFilter } from "../inputs/EnumreceiptTypeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReceiptScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReceiptScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReceiptScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumreceiptTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumreceiptTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  account_nr?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  card?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  paid_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  amount?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  occasion?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  appendix?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  applicationId?: StringWithAggregatesFilter | undefined;
}
