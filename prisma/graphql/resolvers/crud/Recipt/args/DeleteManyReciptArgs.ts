import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptWhereInput } from "../../../inputs/ReciptWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReciptArgs {
  @TypeGraphQL.Field(_type => ReciptWhereInput, {
    nullable: true
  })
  where?: ReciptWhereInput | undefined;
}
