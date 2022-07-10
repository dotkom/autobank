import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutOnlinepottenInput } from "../inputs/ApplicationCreateWithoutOnlinepottenInput";
import { ApplicationUpdateWithoutOnlinepottenInput } from "../inputs/ApplicationUpdateWithoutOnlinepottenInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutOnlinepottenInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutOnlinepottenInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutOnlinepottenInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutOnlinepottenInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutOnlinepottenInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutOnlinepottenInput;
}
