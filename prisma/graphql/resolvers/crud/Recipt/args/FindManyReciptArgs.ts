import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptOrderByWithRelationInput } from "../../../inputs/ReciptOrderByWithRelationInput";
import { ReciptWhereInput } from "../../../inputs/ReciptWhereInput";
import { ReciptWhereUniqueInput } from "../../../inputs/ReciptWhereUniqueInput";
import { ReciptScalarFieldEnum } from "../../../../enums/ReciptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyReciptArgs {
  @TypeGraphQL.Field(_type => ReciptWhereInput, {
    nullable: true
  })
  where?: ReciptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReciptOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReciptOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReciptWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReciptWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReciptScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reimbursement" | "account_nr" | "card" | "paid_at" | "amount" | "occasion" | "appendix"> | undefined;
}
