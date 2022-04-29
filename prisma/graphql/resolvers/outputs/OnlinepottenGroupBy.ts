import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenAvgAggregate } from "../outputs/OnlinepottenAvgAggregate";
import { OnlinepottenCountAggregate } from "../outputs/OnlinepottenCountAggregate";
import { OnlinepottenMaxAggregate } from "../outputs/OnlinepottenMaxAggregate";
import { OnlinepottenMinAggregate } from "../outputs/OnlinepottenMinAggregate";
import { OnlinepottenSumAggregate } from "../outputs/OnlinepottenSumAggregate";

@TypeGraphQL.ObjectType("OnlinepottenGroupBy", {
  isAbstract: true
})
export class OnlinepottenGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occation!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  planned_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hours!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  participants!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payment_method!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recipt_id!: number | null;

  @TypeGraphQL.Field(_type => OnlinepottenCountAggregate, {
    nullable: true
  })
  _count!: OnlinepottenCountAggregate | null;

  @TypeGraphQL.Field(_type => OnlinepottenAvgAggregate, {
    nullable: true
  })
  _avg!: OnlinepottenAvgAggregate | null;

  @TypeGraphQL.Field(_type => OnlinepottenSumAggregate, {
    nullable: true
  })
  _sum!: OnlinepottenSumAggregate | null;

  @TypeGraphQL.Field(_type => OnlinepottenMinAggregate, {
    nullable: true
  })
  _min!: OnlinepottenMinAggregate | null;

  @TypeGraphQL.Field(_type => OnlinepottenMaxAggregate, {
    nullable: true
  })
  _max!: OnlinepottenMaxAggregate | null;
}
