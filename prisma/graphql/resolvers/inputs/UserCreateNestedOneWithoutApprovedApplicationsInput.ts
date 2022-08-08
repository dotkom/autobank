import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutApprovedApplicationsInput } from "../inputs/UserCreateOrConnectWithoutApprovedApplicationsInput";
import { UserCreateWithoutApprovedApplicationsInput } from "../inputs/UserCreateWithoutApprovedApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutApprovedApplicationsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutApprovedApplicationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutApprovedApplicationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutApprovedApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutApprovedApplicationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApprovedApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
