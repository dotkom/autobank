import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ReciptWhereInput", {
  isAbstract: true
})
export class ReciptWhereInput {
  @TypeGraphQL.Field(_type => [ReciptWhereInput], {
    nullable: true
  })
  AND?: ReciptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReciptWhereInput], {
    nullable: true
  })
  OR?: ReciptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReciptWhereInput], {
    nullable: true
  })
  NOT?: ReciptWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  reimbursement?: BoolFilter | undefined;

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

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  appendix?: BytesFilter | undefined;
}
