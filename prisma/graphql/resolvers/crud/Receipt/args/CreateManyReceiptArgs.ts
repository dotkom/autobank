import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReceiptCreateManyInput } from "../../../inputs/ReceiptCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReceiptArgs {
  @TypeGraphQL.Field(_type => [ReceiptCreateManyInput], {
    nullable: false
  })
  data!: ReceiptCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
