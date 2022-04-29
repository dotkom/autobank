import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateWithoutApprovedByInput } from "../inputs/ApplicationUpdateWithoutApprovedByInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateWithWhereUniqueWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationUpdateWithWhereUniqueWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutApprovedByInput, {
    nullable: false
  })
  data!: ApplicationUpdateWithoutApprovedByInput;
}
