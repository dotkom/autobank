import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutApprovedByInput } from "../inputs/ApplicationCreateWithoutApprovedByInput";
import { ApplicationUpdateWithoutApprovedByInput } from "../inputs/ApplicationUpdateWithoutApprovedByInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpsertWithWhereUniqueWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationUpsertWithWhereUniqueWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutApprovedByInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutApprovedByInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutApprovedByInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutApprovedByInput;
}
