import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenWhereUniqueInput } from "../../../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: false
  })
  where!: OnlinepottenWhereUniqueInput;
}
