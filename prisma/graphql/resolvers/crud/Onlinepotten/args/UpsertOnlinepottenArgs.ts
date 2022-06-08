import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenCreateInput } from "../../../inputs/OnlinepottenCreateInput";
import { OnlinepottenUpdateInput } from "../../../inputs/OnlinepottenUpdateInput";
import { OnlinepottenWhereUniqueInput } from "../../../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: false
  })
  where!: OnlinepottenWhereUniqueInput;

  @TypeGraphQL.Field(_type => OnlinepottenCreateInput, {
    nullable: false
  })
  create!: OnlinepottenCreateInput;

  @TypeGraphQL.Field(_type => OnlinepottenUpdateInput, {
    nullable: false
  })
  update!: OnlinepottenUpdateInput;
}
