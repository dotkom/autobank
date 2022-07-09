import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceOrderByWithRelationInput } from "../../../inputs/InvoiceOrderByWithRelationInput";
import { InvoiceWhereInput } from "../../../inputs/InvoiceWhereInput";
import { InvoiceWhereUniqueInput } from "../../../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateInvoiceArgs {
  @TypeGraphQL.Field(_type => InvoiceWhereInput, {
    nullable: true
  })
  where?: InvoiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [InvoiceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: InvoiceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: true
  })
  cursor?: InvoiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
