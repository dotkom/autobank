import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceCreateOrConnectWithoutApplicationInput } from "../inputs/InvoiceCreateOrConnectWithoutApplicationInput";
import { InvoiceCreateWithoutApplicationInput } from "../inputs/InvoiceCreateWithoutApplicationInput";
import { InvoiceWhereUniqueInput } from "../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.InputType("InvoiceCreateNestedOneWithoutApplicationInput", {
  isAbstract: true
})
export class InvoiceCreateNestedOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => InvoiceCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: InvoiceCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: InvoiceCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: true
  })
  connect?: InvoiceWhereUniqueInput | undefined;
}
