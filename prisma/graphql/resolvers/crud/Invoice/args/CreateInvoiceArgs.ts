import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceCreateInput } from "../../../inputs/InvoiceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceCreateInput, {
    nullable: false
  })
  data!: InvoiceCreateInput;
}
