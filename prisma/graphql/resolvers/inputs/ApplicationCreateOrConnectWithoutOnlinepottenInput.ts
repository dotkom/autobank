import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutOnlinepottenInput } from "../inputs/ApplicationCreateWithoutOnlinepottenInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateOrConnectWithoutOnlinepottenInput", {
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutOnlinepottenInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutOnlinepottenInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutOnlinepottenInput;
}
