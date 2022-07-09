import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptUpdateManyMutationInput } from "../../../inputs/ReceiptUpdateManyMutationInput";
import { ReceiptWhereInput } from "../../../inputs/ReceiptWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReceiptArgs {
  @TypeGraphQL.Field(_type => ReceiptUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReceiptUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReceiptWhereInput, {
    nullable: true
  })
  where?: ReceiptWhereInput | undefined;
}
