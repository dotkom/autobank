import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";
import { receiptType } from "../enums/receiptType";

@TypeGraphQL.ObjectType("Receipt", {
  isAbstract: true
})
export class Receipt {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => receiptType, {
    nullable: false
  })
  type!: "card" | "deposit";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  account_nr?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  card?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  paid_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  appendix!: string[];

  application?: Application;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;
}
