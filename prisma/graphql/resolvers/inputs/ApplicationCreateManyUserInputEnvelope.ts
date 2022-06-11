import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyUserInput } from "../inputs/ApplicationCreateManyUserInput";

@TypeGraphQL.InputType("ApplicationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ApplicationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ApplicationCreateManyUserInput], {
    nullable: false
  })
  data!: ApplicationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
