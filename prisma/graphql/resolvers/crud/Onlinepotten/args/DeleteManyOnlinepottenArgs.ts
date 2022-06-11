import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenWhereInput } from "../../../inputs/OnlinepottenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  where?: OnlinepottenWhereInput | undefined;
}
