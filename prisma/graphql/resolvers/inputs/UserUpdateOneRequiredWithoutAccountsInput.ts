import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAccountsInput } from "../inputs/UserCreateOrConnectWithoutAccountsInput";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateWithoutAccountsInput } from "../inputs/UserUpdateWithoutAccountsInput";
import { UserUpsertWithoutAccountsInput } from "../inputs/UserUpsertWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutAccountsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutAccountsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAccountsInput, {
    nullable: true
  })
  create?: UserCreateWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAccountsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAccountsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAccountsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAccountsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAccountsInput | undefined;
}
