import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutApplicationsInput } from "../inputs/UserCreateOrConnectWithoutApplicationsInput";
import { UserCreateWithoutApplicationsInput } from "../inputs/UserCreateWithoutApplicationsInput";
import { UserUpdateWithoutApplicationsInput } from "../inputs/UserUpdateWithoutApplicationsInput";
import { UserUpsertWithoutApplicationsInput } from "../inputs/UserUpsertWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutApplicationsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutApplicationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutApplicationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutApplicationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutApplicationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutApplicationsInput | undefined;
}
