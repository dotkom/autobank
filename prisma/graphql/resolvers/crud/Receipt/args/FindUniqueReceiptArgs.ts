import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptWhereUniqueInput } from "../../../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: false
  })
  where!: ReceiptWhereUniqueInput;
}
