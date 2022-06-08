import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyUserInput } from "../inputs/SessionCreateManyUserInput";

@TypeGraphQL.InputType("SessionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class SessionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SessionCreateManyUserInput], {
    nullable: false
  })
  data!: SessionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
