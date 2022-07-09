import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutOnlinepottenInput } from "../inputs/ApplicationCreateOrConnectWithoutOnlinepottenInput";
import { ApplicationCreateWithoutOnlinepottenInput } from "../inputs/ApplicationCreateWithoutOnlinepottenInput";
import { ApplicationUpdateWithoutOnlinepottenInput } from "../inputs/ApplicationUpdateWithoutOnlinepottenInput";
import { ApplicationUpsertWithoutOnlinepottenInput } from "../inputs/ApplicationUpsertWithoutOnlinepottenInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneRequiredWithoutOnlinepottenInput", {
  isAbstract: true
})
export class ApplicationUpdateOneRequiredWithoutOnlinepottenInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutOnlinepottenInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutOnlinepottenInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutOnlinepottenInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutOnlinepottenInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutOnlinepottenInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutOnlinepottenInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutOnlinepottenInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutOnlinepottenInput | undefined;
}
