import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptCreateInput } from "../../../inputs/ReceiptCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptCreateInput, {
    nullable: false
  })
  data!: ReceiptCreateInput;
}
