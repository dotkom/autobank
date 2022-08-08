import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptUpdateInput } from "../../../inputs/ReceiptUpdateInput";
import { ReceiptWhereUniqueInput } from "../../../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptUpdateInput, {
    nullable: false
  })
  data!: ReceiptUpdateInput;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: false
  })
  where!: ReceiptWhereUniqueInput;
}
