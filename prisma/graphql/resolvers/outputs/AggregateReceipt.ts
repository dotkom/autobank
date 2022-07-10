import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptAvgAggregate } from "../outputs/ReceiptAvgAggregate";
import { ReceiptCountAggregate } from "../outputs/ReceiptCountAggregate";
import { ReceiptMaxAggregate } from "../outputs/ReceiptMaxAggregate";
import { ReceiptMinAggregate } from "../outputs/ReceiptMinAggregate";
import { ReceiptSumAggregate } from "../outputs/ReceiptSumAggregate";

@TypeGraphQL.ObjectType("AggregateReceipt", {
  isAbstract: true
})
export class AggregateReceipt {
  @TypeGraphQL.Field(_type => ReceiptCountAggregate, {
    nullable: true
  })
  _count!: ReceiptCountAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptAvgAggregate, {
    nullable: true
  })
  _avg!: ReceiptAvgAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptSumAggregate, {
    nullable: true
  })
  _sum!: ReceiptSumAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptMinAggregate, {
    nullable: true
  })
  _min!: ReceiptMinAggregate | null;

  @TypeGraphQL.Field(_type => ReceiptMaxAggregate, {
    nullable: true
  })
  _max!: ReceiptMaxAggregate | null;
}
