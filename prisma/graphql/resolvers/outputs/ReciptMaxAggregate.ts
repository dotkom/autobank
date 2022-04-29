import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ReciptMaxAggregate", {
  isAbstract: true
})
export class ReciptMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  reimbursement!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  account_nr!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  card!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  paid_at!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  amount!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occasion!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  appendix!: Buffer | null;
}
