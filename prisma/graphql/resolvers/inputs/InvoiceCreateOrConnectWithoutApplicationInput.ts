import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceCreateWithoutApplicationInput } from "../inputs/InvoiceCreateWithoutApplicationInput";
import { InvoiceWhereUniqueInput } from "../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.InputType("InvoiceCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class InvoiceCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: false
  })
  where!: InvoiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvoiceCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: InvoiceCreateWithoutApplicationInput;
}
