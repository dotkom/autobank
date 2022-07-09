import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenWhereInput } from "../inputs/OnlinepottenWhereInput";

@TypeGraphQL.InputType("OnlinepottenRelationFilter", {
  isAbstract: true
})
export class OnlinepottenRelationFilter {
  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  is?: OnlinepottenWhereInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  isNot?: OnlinepottenWhereInput | undefined;
}
