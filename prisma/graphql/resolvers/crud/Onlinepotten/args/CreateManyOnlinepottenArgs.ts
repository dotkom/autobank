import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenCreateManyInput } from "../../../inputs/OnlinepottenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOnlinepottenArgs {
  @TypeGraphQL.Field(_type => [OnlinepottenCreateManyInput], {
    nullable: false
  })
  data!: OnlinepottenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
