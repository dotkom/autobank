import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyApprovedByInput } from "../inputs/ApplicationCreateManyApprovedByInput";

@TypeGraphQL.InputType("ApplicationCreateManyApprovedByInputEnvelope", {
  isAbstract: true
})
export class ApplicationCreateManyApprovedByInputEnvelope {
  @TypeGraphQL.Field(_type => [ApplicationCreateManyApprovedByInput], {
    nullable: false
  })
  data!: ApplicationCreateManyApprovedByInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
