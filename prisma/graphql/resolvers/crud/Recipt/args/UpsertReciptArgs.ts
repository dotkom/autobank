import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptCreateInput } from "../../../inputs/ReciptCreateInput";
import { ReciptUpdateInput } from "../../../inputs/ReciptUpdateInput";
import { ReciptWhereUniqueInput } from "../../../inputs/ReciptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertReciptArgs {
  @TypeGraphQL.Field(_type => ReciptWhereUniqueInput, {
    nullable: false
  })
  where!: ReciptWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReciptCreateInput, {
    nullable: false
  })
  create!: ReciptCreateInput;

  @TypeGraphQL.Field(_type => ReciptUpdateInput, {
    nullable: false
  })
  update!: ReciptUpdateInput;
}
