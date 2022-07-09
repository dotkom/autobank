import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptOrderByWithAggregationInput } from "../../../inputs/ReceiptOrderByWithAggregationInput";
import { ReceiptScalarWhereWithAggregatesInput } from "../../../inputs/ReceiptScalarWhereWithAggregatesInput";
import { ReceiptWhereInput } from "../../../inputs/ReceiptWhereInput";
import { ReceiptScalarFieldEnum } from "../../../../enums/ReceiptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  where?: ReceiptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReceiptOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReceiptOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "account_nr" | "card" | "paid_at" | "amount" | "occasion" | "appendix" | "applicationId">;

  @TypeGraphQL.Field(_type => ReceiptScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReceiptScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
