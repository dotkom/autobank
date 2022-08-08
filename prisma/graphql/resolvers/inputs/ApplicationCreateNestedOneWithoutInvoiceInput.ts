import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutInvoiceInput } from "../inputs/ApplicationCreateOrConnectWithoutInvoiceInput";
import { ApplicationCreateWithoutInvoiceInput } from "../inputs/ApplicationCreateWithoutInvoiceInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedOneWithoutInvoiceInput", {
  isAbstract: true
})
export class ApplicationCreateNestedOneWithoutInvoiceInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutInvoiceInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutInvoiceInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutInvoiceInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutInvoiceInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;
}
