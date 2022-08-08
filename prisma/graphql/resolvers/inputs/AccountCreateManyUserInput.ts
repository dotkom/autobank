import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AccountCreateManyUserInput", {
  isAbstract: true
})
export class AccountCreateManyUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerAccountId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  refresh_token?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expires_at?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  scope?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id_token?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  session_state?: string | undefined;
}
