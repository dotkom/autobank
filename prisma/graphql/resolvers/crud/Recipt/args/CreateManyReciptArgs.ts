import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptCreateManyInput } from "../../../inputs/ReciptCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReciptArgs {
  @TypeGraphQL.Field(_type => [ReciptCreateManyInput], {
    nullable: false
  })
  data!: ReciptCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
