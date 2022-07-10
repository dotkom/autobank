import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationWhereInput } from "../inputs/ApplicationWhereInput";

@TypeGraphQL.InputType("ApplicationRelationFilter", {
  isAbstract: true
})
export class ApplicationRelationFilter {
  @TypeGraphQL.Field(_type => ApplicationWhereInput, {
    nullable: true
  })
  is?: ApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereInput, {
    nullable: true
  })
  isNot?: ApplicationWhereInput | undefined;
}
