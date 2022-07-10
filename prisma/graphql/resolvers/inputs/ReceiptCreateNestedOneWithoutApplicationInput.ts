import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateOrConnectWithoutApplicationInput } from "../inputs/ReceiptCreateOrConnectWithoutApplicationInput";
import { ReceiptCreateWithoutApplicationInput } from "../inputs/ReceiptCreateWithoutApplicationInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptCreateNestedOneWithoutApplicationInput", {
  isAbstract: true
})
export class ReceiptCreateNestedOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => ReceiptCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: ReceiptCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: ReceiptCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceiptWhereUniqueInput | undefined;
}
