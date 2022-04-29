import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SessionWhereInput", {
  isAbstract: true
})
export class SessionWhereInput {
  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  AND?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  OR?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  NOT?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  sessionToken?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expires?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
