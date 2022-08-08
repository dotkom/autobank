import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceUpdateManyMutationInput } from "../../../inputs/InvoiceUpdateManyMutationInput";
import { InvoiceWhereInput } from "../../../inputs/InvoiceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceUpdateManyMutationInput, {
    nullable: false
  })
  data!: InvoiceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  where?: InvoiceWhereInput | undefined;
}
