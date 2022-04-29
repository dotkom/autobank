import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptUpdateInput } from "../../../inputs/ReciptUpdateInput";
import { ReciptWhereUniqueInput } from "../../../inputs/ReciptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateReciptArgs {
  @TypeGraphQL.Field(_type => ReciptUpdateInput, {
    nullable: false
  })
  data!: ReciptUpdateInput;

  @TypeGraphQL.Field(_type => ReciptWhereUniqueInput, {
    nullable: false
  })
  where!: ReciptWhereUniqueInput;
}
