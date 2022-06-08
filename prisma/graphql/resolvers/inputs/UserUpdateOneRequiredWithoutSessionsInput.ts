import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserUpdateWithoutSessionsInput } from "../inputs/UserUpdateWithoutSessionsInput";
import { UserUpsertWithoutSessionsInput } from "../inputs/UserUpsertWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSessionsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSessionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSessionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSessionsInput | undefined;
}
