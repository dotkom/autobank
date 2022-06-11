import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SessionScalarWhereInput", {
  isAbstract: true
})
export class SessionScalarWhereInput {
  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  AND?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  OR?: SessionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  NOT?: SessionScalarWhereInput[] | undefined;

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
}
