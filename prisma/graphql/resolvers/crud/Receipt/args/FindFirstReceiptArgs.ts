import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptOrderByWithRelationInput } from "../../../inputs/ReceiptOrderByWithRelationInput";
import { ReceiptWhereInput } from "../../../inputs/ReceiptWhereInput";
import { ReceiptWhereUniqueInput } from "../../../inputs/ReceiptWhereUniqueInput";
import { ReceiptScalarFieldEnum } from "../../../../enums/ReceiptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  where?: ReceiptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReceiptOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReceiptOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReceiptWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ReceiptScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "account_nr" | "card" | "paid_at" | "amount" | "occasion" | "appendix" | "applicationId"> | undefined;
}
