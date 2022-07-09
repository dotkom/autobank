import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationRelationFilter } from "../inputs/ApplicationRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumreceiptTypeFilter } from "../inputs/EnumreceiptTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("ReceiptWhereInput", {
  isAbstract: true
})
export class ReceiptWhereInput {
  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  AND?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  OR?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptWhereInput], {
    nullable: true
  })
  NOT?: ReceiptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumreceiptTypeFilter, {
    nullable: true
  })
  type?: EnumreceiptTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  account_nr?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  card?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  paid_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  amount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  occasion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  appendix?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationRelationFilter, {
    nullable: true
  })
  application?: ApplicationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  applicationId?: StringFilter | undefined;
}
