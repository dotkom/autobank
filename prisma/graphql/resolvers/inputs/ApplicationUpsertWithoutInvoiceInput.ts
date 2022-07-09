import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutInvoiceInput } from "../inputs/ApplicationCreateWithoutInvoiceInput";
import { ApplicationUpdateWithoutInvoiceInput } from "../inputs/ApplicationUpdateWithoutInvoiceInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutInvoiceInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutInvoiceInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutInvoiceInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutInvoiceInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutInvoiceInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutInvoiceInput;
}
