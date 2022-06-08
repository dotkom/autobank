import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Account", {
  isAbstract: true
})
export class Account {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

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
  refresh_token?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expires_at?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token_type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  scope?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id_token?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  session_state?: string | null;

  user?: User;
}
