import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApplicationsInput } from "../inputs/UserCreateWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutApplicationsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApplicationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutApplicationsInput;
}
