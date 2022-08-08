import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateWithoutApplicationInput } from "../inputs/ReceiptCreateWithoutApplicationInput";
import { ReceiptUpdateWithoutApplicationInput } from "../inputs/ReceiptUpdateWithoutApplicationInput";

@TypeGraphQL.InputType("ReceiptUpsertWithoutApplicationInput", {
  isAbstract: true
})
export class ReceiptUpsertWithoutApplicationInput {
  @TypeGraphQL.Field(_type => ReceiptUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: ReceiptUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => ReceiptCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: ReceiptCreateWithoutApplicationInput;
}
