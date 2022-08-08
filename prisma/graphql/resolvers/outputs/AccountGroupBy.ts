import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountAvgAggregate } from "../outputs/AccountAvgAggregate";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccountSumAggregate } from "../outputs/AccountSumAggregate";

@TypeGraphQL.ObjectType("AccountGroupBy", {
  isAbstract: true
})
export class AccountGroupBy {
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
  refresh_token!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  access_token!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  expires_at!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  scope!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id_token!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  session_state!: string | null;

  @TypeGraphQL.Field(_type => AccountCountAggregate, {
    nullable: true
  })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountAvgAggregate, {
    nullable: true
  })
  _avg!: AccountAvgAggregate | null;

  @TypeGraphQL.Field(_type => AccountSumAggregate, {
    nullable: true
  })
  _sum!: AccountSumAggregate | null;

  @TypeGraphQL.Field(_type => AccountMinAggregate, {
    nullable: true
  })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountMaxAggregate, {
    nullable: true
  })
  _max!: AccountMaxAggregate | null;
}
