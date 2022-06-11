import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedBytesFilter } from "../inputs/NestedBytesFilter";

@TypeGraphQL.InputType("BytesFilter", {
  isAbstract: true
})
export class BytesFilter {
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

  @TypeGraphQL.Field(_type => NestedBytesFilter, {
    nullable: true
  })
  not?: NestedBytesFilter | undefined;
}
