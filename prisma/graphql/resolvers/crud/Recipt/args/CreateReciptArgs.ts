import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptCreateInput } from "../../../inputs/ReciptCreateInput";

@TypeGraphQL.ArgsType()
export class CreateReciptArgs {
  @TypeGraphQL.Field(_type => ReciptCreateInput, {
    nullable: false
  })
  data!: ReciptCreateInput;
}
