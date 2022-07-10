import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptAvgAggregate } from "../outputs/ReceiptAvgAggregate";
import { ReceiptCountAggregate } from "../outputs/ReceiptCountAggregate";
import { ReceiptMaxAggregate } from "../outputs/ReceiptMaxAggregate";
import { ReceiptMinAggregate } from "../outputs/ReceiptMinAggregate";
import { ReceiptSumAggregate } from "../outputs/ReceiptSumAggregate";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.ObjectType("ReceiptGroupBy", {
  isAbstract: true
})
export class ReceiptGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => receiptType, {
    nullable: false
  })
  type!: "card" | "deposit";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account!: string | null;

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

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  appendix!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;

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
