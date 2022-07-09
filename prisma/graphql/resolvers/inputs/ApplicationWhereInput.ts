import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { InvoiceRelationFilter } from "../inputs/InvoiceRelationFilter";
import { OnlinepottenRelationFilter } from "../inputs/OnlinepottenRelationFilter";
import { ReceiptRelationFilter } from "../inputs/ReceiptRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ApplicationWhereInput", {
  isAbstract: true
})
export class ApplicationWhereInput {
  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  AND?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  OR?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  NOT?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  userId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  full_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  approved_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  approvedBy?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  approvedById?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  last_updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  responsible_unit?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  comments?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  error?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  error_fields?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => ReceiptRelationFilter, {
    nullable: true
  })
  Receipt?: ReceiptRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenRelationFilter, {
    nullable: true
  })
  Onlinepotten?: OnlinepottenRelationFilter | undefined;

  @TypeGraphQL.Field(_type => InvoiceRelationFilter, {
    nullable: true
  })
  Invoice?: InvoiceRelationFilter | undefined;
}
