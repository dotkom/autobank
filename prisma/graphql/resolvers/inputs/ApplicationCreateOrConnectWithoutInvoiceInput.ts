import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutInvoiceInput } from "../inputs/ApplicationCreateWithoutInvoiceInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateOrConnectWithoutInvoiceInput", {
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutInvoiceInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutInvoiceInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutInvoiceInput;
}
