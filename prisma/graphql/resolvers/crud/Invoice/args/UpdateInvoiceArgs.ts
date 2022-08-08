import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceUpdateInput } from "../../../inputs/InvoiceUpdateInput";
import { InvoiceWhereUniqueInput } from "../../../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceUpdateInput, {
    nullable: false
  })
  data!: InvoiceUpdateInput;

  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: false
  })
  where!: InvoiceWhereUniqueInput;
}
