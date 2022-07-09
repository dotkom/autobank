import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptWhereUniqueInput } from "../../../inputs/ReciptWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueReciptArgs {
  @TypeGraphQL.Field(_type => ReciptWhereUniqueInput, {
    nullable: false
  })
  where!: ReciptWhereUniqueInput;
}
