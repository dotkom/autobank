import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionCreateManyInput } from "../../../inputs/SessionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySessionArgs {
  @TypeGraphQL.Field(_type => [SessionCreateManyInput], {
    nullable: false
  })
  data!: SessionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
