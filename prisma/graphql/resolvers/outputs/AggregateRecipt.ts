import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReciptAvgAggregate } from "../outputs/ReciptAvgAggregate";
import { ReciptCountAggregate } from "../outputs/ReciptCountAggregate";
import { ReciptMaxAggregate } from "../outputs/ReciptMaxAggregate";
import { ReciptMinAggregate } from "../outputs/ReciptMinAggregate";
import { ReciptSumAggregate } from "../outputs/ReciptSumAggregate";

@TypeGraphQL.ObjectType("AggregateRecipt", {
  isAbstract: true
})
export class AggregateRecipt {
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
