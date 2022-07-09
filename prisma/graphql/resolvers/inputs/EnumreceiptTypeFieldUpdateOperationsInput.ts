import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.InputType("EnumreceiptTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumreceiptTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => receiptType, {
    nullable: true
  })
  set?: "card" | "deposit" | undefined;
}
