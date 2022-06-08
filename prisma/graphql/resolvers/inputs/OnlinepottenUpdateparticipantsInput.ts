import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OnlinepottenUpdateparticipantsInput", {
  isAbstract: true
})
export class OnlinepottenUpdateparticipantsInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  set?: string[] | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  push?: string[] | undefined;
}
