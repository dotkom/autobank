import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionWhereInput } from "../inputs/SessionWhereInput";

@TypeGraphQL.InputType("SessionListRelationFilter", {
  isAbstract: true
})
export class SessionListRelationFilter {
  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  every?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  some?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  none?: SessionWhereInput | undefined;
}
