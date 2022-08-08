import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationRelationFilter } from "../inputs/ApplicationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("InvoiceWhereInput", {
  isAbstract: true
})
export class InvoiceWhereInput {
  @TypeGraphQL.Field(_type => [InvoiceWhereInput], {
    nullable: true
  })
  AND?: InvoiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoiceWhereInput], {
    nullable: true
  })
  OR?: InvoiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoiceWhereInput], {
    nullable: true
  })
  NOT?: InvoiceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orgnr?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  occasion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  method?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  po_nr?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  duedays?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationRelationFilter, {
    nullable: true
  })
  application?: ApplicationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  applicationId?: StringFilter | undefined;
}
