import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.ObjectType("ReceiptMaxAggregate", {
  isAbstract: true
})
export class ReceiptMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => receiptType, {
    nullable: true
  })
  type!: "card" | "deposit" | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applicationId!: string | null;
}
