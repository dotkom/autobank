import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApprovedApplicationsInput } from "../inputs/UserCreateWithoutApprovedApplicationsInput";
import { UserUpdateWithoutApprovedApplicationsInput } from "../inputs/UserUpdateWithoutApprovedApplicationsInput";

@TypeGraphQL.InputType("UserUpsertWithoutApprovedApplicationsInput", {
  isAbstract: true
})
export class UserUpsertWithoutApprovedApplicationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutApprovedApplicationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutApprovedApplicationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApprovedApplicationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutApprovedApplicationsInput;
}
