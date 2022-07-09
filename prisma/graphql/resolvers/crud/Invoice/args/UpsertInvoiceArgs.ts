import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceCreateInput } from "../../../inputs/InvoiceCreateInput";
import { InvoiceUpdateInput } from "../../../inputs/InvoiceUpdateInput";
import { InvoiceWhereUniqueInput } from "../../../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: false
  })
  where!: InvoiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => InvoiceCreateInput, {
    nullable: false
  })
  create!: InvoiceCreateInput;

  @TypeGraphQL.Field(_type => InvoiceUpdateInput, {
    nullable: false
  })
  update!: InvoiceUpdateInput;
}
