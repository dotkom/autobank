import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptOrderByWithAggregationInput } from "../../../inputs/ReciptOrderByWithAggregationInput";
import { ReciptScalarWhereWithAggregatesInput } from "../../../inputs/ReciptScalarWhereWithAggregatesInput";
import { ReciptWhereInput } from "../../../inputs/ReciptWhereInput";
import { ReciptScalarFieldEnum } from "../../../../enums/ReciptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReciptArgs {
  @TypeGraphQL.Field(_type => ReciptWhereInput, {
    nullable: true
  })
  where?: ReciptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReciptOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReciptOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReciptScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reimbursement" | "account_nr" | "card" | "paid_at" | "amount" | "occasion" | "appendix">;

  @TypeGraphQL.Field(_type => ReciptScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReciptScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
