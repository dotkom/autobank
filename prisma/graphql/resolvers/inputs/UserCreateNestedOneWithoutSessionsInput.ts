import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSessionsInput } from "../inputs/UserCreateOrConnectWithoutSessionsInput";
import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSessionsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
