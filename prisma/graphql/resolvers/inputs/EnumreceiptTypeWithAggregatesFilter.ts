import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumreceiptTypeFilter } from "../inputs/NestedEnumreceiptTypeFilter";
import { NestedEnumreceiptTypeWithAggregatesFilter } from "../inputs/NestedEnumreceiptTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { receiptType } from "../../enums/receiptType";

@TypeGraphQL.InputType("EnumreceiptTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumreceiptTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumreceiptTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumreceiptTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumreceiptTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumreceiptTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumreceiptTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumreceiptTypeFilter | undefined;
}
