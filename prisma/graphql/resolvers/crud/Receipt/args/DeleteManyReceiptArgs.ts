import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptWhereInput } from "../../../inputs/ReceiptWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  where?: ReceiptWhereInput | undefined;
}
