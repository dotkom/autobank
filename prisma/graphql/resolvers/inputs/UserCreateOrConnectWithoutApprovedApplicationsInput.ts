import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApprovedApplicationsInput } from "../inputs/UserCreateWithoutApprovedApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutApprovedApplicationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutApprovedApplicationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApprovedApplicationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutApprovedApplicationsInput;
}
