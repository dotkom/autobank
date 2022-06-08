import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedManyWithoutApprovedByInput } from "../inputs/ApplicationCreateNestedManyWithoutApprovedByInput";
import { ApplicationCreateNestedManyWithoutUserInput } from "../inputs/ApplicationCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {
  isAbstract: true
})
export class UserCreateWithoutAccountsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image?: string | undefined;

  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | "SUPERADMIN" | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  applications?: ApplicationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedManyWithoutApprovedByInput, {
    nullable: true
  })
  approvedApplications?: ApplicationCreateNestedManyWithoutApprovedByInput | undefined;
}
