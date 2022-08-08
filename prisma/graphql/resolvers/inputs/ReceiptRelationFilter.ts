import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptWhereInput } from "../inputs/ReceiptWhereInput";

@TypeGraphQL.InputType("ReceiptRelationFilter", {
  isAbstract: true
})
export class ReceiptRelationFilter {
  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  is?: ReceiptWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  isNot?: ReceiptWhereInput | undefined;
}
