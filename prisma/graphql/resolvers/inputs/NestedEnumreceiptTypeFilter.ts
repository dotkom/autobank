import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.InputType("NestedEnumreceiptTypeFilter", {
  isAbstract: true
})
export class NestedEnumreceiptTypeFilter {
  @TypeGraphQL.Field(_type => receiptType, {
    nullable: true
  })
  equals?: "card" | "deposit" | undefined;

  @TypeGraphQL.Field(_type => [receiptType], {
    nullable: true
  })
  in?: Array<"card" | "deposit"> | undefined;

  @TypeGraphQL.Field(_type => [receiptType], {
    nullable: true
  })
  notIn?: Array<"card" | "deposit"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumreceiptTypeFilter, {
    nullable: true
  })
  not?: NestedEnumreceiptTypeFilter | undefined;
}
