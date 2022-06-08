import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenUpdateInput } from "../../../inputs/OnlinepottenUpdateInput";
import { OnlinepottenWhereUniqueInput } from "../../../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenUpdateInput, {
    nullable: false
  })
  data!: OnlinepottenUpdateInput;

  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: false
  })
  where!: OnlinepottenWhereUniqueInput;
}
