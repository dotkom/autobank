import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumreceiptTypeFilter } from "../inputs/NestedEnumreceiptTypeFilter";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.InputType("EnumreceiptTypeFilter", {
  isAbstract: true
})
export class EnumreceiptTypeFilter {
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
