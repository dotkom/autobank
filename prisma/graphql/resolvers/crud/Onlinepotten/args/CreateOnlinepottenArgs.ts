import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenCreateInput } from "../../../inputs/OnlinepottenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenCreateInput, {
    nullable: false
  })
  data!: OnlinepottenCreateInput;
}
