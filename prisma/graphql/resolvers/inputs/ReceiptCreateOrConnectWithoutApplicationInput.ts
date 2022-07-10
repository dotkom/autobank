import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateWithoutApplicationInput } from "../inputs/ReceiptCreateWithoutApplicationInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class ReceiptCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: false
  })
  where!: ReceiptWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReceiptCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: ReceiptCreateWithoutApplicationInput;
}
