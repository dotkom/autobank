import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutInvoiceInput } from "../inputs/ApplicationCreateNestedOneWithoutInvoiceInput";

@TypeGraphQL.InputType("InvoiceCreateInput", {
  isAbstract: true
})
export class InvoiceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orgnr!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  method?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  po_nr?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duedays?: number | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutInvoiceInput, {
    nullable: false
  })
  application!: ApplicationCreateNestedOneWithoutInvoiceInput;
}
