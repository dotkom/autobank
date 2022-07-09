import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSessionsInput } from "../inputs/UserCreateWithoutSessionsInput";
import { UserUpdateWithoutSessionsInput } from "../inputs/UserUpdateWithoutSessionsInput";

@TypeGraphQL.InputType("UserUpsertWithoutSessionsInput", {
  isAbstract: true
})
export class UserUpsertWithoutSessionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSessionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSessionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSessionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSessionsInput;
}
