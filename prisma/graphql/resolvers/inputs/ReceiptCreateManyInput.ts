import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateappendixInput } from "../inputs/ReceiptCreateappendixInput";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.InputType("ReceiptCreateManyInput", {
  isAbstract: true
})
export class ReceiptCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => receiptType, {
    nullable: false
  })
  type!: "card" | "deposit";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  account_nr?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  card?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  paid_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => ReceiptCreateappendixInput, {
    nullable: true
  })
  appendix?: ReceiptCreateappendixInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;
}
