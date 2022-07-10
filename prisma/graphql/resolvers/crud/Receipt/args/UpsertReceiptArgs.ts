import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptCreateInput } from "../../../inputs/ReceiptCreateInput";
import { ReceiptUpdateInput } from "../../../inputs/ReceiptUpdateInput";
import { ReceiptWhereUniqueInput } from "../../../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: false
  })
  where!: ReceiptWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReceiptCreateInput, {
    nullable: false
  })
  create!: ReceiptCreateInput;

  @TypeGraphQL.Field(_type => ReceiptUpdateInput, {
    nullable: false
  })
  update!: ReceiptUpdateInput;
}
