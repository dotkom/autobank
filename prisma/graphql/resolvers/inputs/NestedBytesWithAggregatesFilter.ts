import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBytesFilter } from "../inputs/NestedBytesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("NestedBytesWithAggregatesFilter", {
  isAbstract: true
})
export class NestedBytesWithAggregatesFilter {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  equals?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  in?: Buffer[] | undefined;

  @TypeGraphQL.Field(_type => [GraphQLScalars.ByteResolver], {
    nullable: true
  })
  notIn?: Buffer[] | undefined;

  @TypeGraphQL.Field(_type => NestedBytesWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedBytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBytesFilter, {
    nullable: true
  })
  _min?: NestedBytesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedBytesFilter, {
    nullable: true
  })
  _max?: NestedBytesFilter | undefined;
}
