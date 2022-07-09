import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceWhereInput } from "../inputs/InvoiceWhereInput";

@TypeGraphQL.InputType("InvoiceRelationFilter", {
  isAbstract: true
})
export class InvoiceRelationFilter {
  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  is?: InvoiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  isNot?: InvoiceWhereInput | undefined;
}
