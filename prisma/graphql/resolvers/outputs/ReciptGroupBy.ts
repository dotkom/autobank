import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReciptAvgAggregate } from "../outputs/ReciptAvgAggregate";
import { ReciptCountAggregate } from "../outputs/ReciptCountAggregate";
import { ReciptMaxAggregate } from "../outputs/ReciptMaxAggregate";
import { ReciptMinAggregate } from "../outputs/ReciptMinAggregate";
import { ReciptSumAggregate } from "../outputs/ReciptSumAggregate";

@TypeGraphQL.ObjectType("ReciptGroupBy", {
  isAbstract: true
})
export class ReciptGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  reimbursement!: boolean;

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
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  appendix!: Buffer;

  @TypeGraphQL.Field(_type => ReciptCountAggregate, {
    nullable: true
  })
  _count!: ReciptCountAggregate | null;

  @TypeGraphQL.Field(_type => ReciptAvgAggregate, {
    nullable: true
  })
  _avg!: ReciptAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReciptSumAggregate, {
    nullable: true
  })
  _sum!: ReciptSumAggregate | null;

  @TypeGraphQL.Field(_type => ReciptMinAggregate, {
    nullable: true
  })
  _min!: ReciptMinAggregate | null;

  @TypeGraphQL.Field(_type => ReciptMaxAggregate, {
    nullable: true
  })
  _max!: ReciptMaxAggregate | null;
}
