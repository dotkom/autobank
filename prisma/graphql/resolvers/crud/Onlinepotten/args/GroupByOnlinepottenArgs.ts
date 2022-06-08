import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenOrderByWithAggregationInput } from "../../../inputs/OnlinepottenOrderByWithAggregationInput";
import { OnlinepottenScalarWhereWithAggregatesInput } from "../../../inputs/OnlinepottenScalarWhereWithAggregatesInput";
import { OnlinepottenWhereInput } from "../../../inputs/OnlinepottenWhereInput";
import { OnlinepottenScalarFieldEnum } from "../../../../enums/OnlinepottenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  where?: OnlinepottenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OnlinepottenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "occation" | "planned_date" | "hours" | "description" | "participants" | "payment_method" | "recipt_id">;

  @TypeGraphQL.Field(_type => OnlinepottenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OnlinepottenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
