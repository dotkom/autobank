import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceOrderByWithAggregationInput } from "../../../inputs/InvoiceOrderByWithAggregationInput";
import { InvoiceScalarWhereWithAggregatesInput } from "../../../inputs/InvoiceScalarWhereWithAggregatesInput";
import { InvoiceWhereInput } from "../../../inputs/InvoiceWhereInput";
import { InvoiceScalarFieldEnum } from "../../../../enums/InvoiceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  where?: InvoiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvoiceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: InvoiceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [InvoiceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "orgnr" | "occasion" | "method" | "po_nr" | "duedays" | "applicationId">;

  @TypeGraphQL.Field(_type => InvoiceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: InvoiceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
