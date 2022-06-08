import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceWhereUniqueInput } from "../../../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: false
  })
  where!: InvoiceWhereUniqueInput;
}
