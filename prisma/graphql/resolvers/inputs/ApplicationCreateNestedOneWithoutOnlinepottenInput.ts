import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutOnlinepottenInput } from "../inputs/ApplicationCreateOrConnectWithoutOnlinepottenInput";
import { ApplicationCreateWithoutOnlinepottenInput } from "../inputs/ApplicationCreateWithoutOnlinepottenInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedOneWithoutOnlinepottenInput", {
  isAbstract: true
})
export class ApplicationCreateNestedOneWithoutOnlinepottenInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutOnlinepottenInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutOnlinepottenInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutOnlinepottenInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutOnlinepottenInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;
}
