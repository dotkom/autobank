import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SessionCreateManyUserInput", {
  isAbstract: true
})
export class SessionCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sessionToken!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expires!: Date;
}
