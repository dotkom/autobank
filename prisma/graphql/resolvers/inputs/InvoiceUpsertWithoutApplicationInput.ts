import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceCreateWithoutApplicationInput } from "../inputs/InvoiceCreateWithoutApplicationInput";
import { InvoiceUpdateWithoutApplicationInput } from "../inputs/InvoiceUpdateWithoutApplicationInput";

@TypeGraphQL.InputType("InvoiceUpsertWithoutApplicationInput", {
  isAbstract: true
})
export class InvoiceUpsertWithoutApplicationInput {
  @TypeGraphQL.Field(_type => InvoiceUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: InvoiceUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => InvoiceCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: InvoiceCreateWithoutApplicationInput;
}
