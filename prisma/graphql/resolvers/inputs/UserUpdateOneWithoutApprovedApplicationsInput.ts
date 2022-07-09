import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutApprovedApplicationsInput } from "../inputs/UserCreateOrConnectWithoutApprovedApplicationsInput";
import { UserCreateWithoutApprovedApplicationsInput } from "../inputs/UserCreateWithoutApprovedApplicationsInput";
import { UserUpdateWithoutApprovedApplicationsInput } from "../inputs/UserUpdateWithoutApprovedApplicationsInput";
import { UserUpsertWithoutApprovedApplicationsInput } from "../inputs/UserUpsertWithoutApprovedApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutApprovedApplicationsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutApprovedApplicationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutApprovedApplicationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutApprovedApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutApprovedApplicationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApprovedApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutApprovedApplicationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutApprovedApplicationsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutApprovedApplicationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutApprovedApplicationsInput | undefined;
}
