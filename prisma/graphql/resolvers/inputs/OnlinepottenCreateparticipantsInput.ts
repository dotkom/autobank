import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OnlinepottenCreateparticipantsInput", {
  isAbstract: true
})
export class OnlinepottenCreateparticipantsInput {
  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  set!: string[];
}
