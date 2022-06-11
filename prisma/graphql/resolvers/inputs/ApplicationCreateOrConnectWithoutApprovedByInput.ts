import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutApprovedByInput } from "../inputs/ApplicationCreateWithoutApprovedByInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateOrConnectWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutApprovedByInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutApprovedByInput;
}
