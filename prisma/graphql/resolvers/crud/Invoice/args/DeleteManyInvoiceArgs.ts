import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceWhereInput } from "../../../inputs/InvoiceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  where?: InvoiceWhereInput | undefined;
}
