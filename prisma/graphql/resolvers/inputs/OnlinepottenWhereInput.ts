import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationRelationFilter } from "../inputs/ApplicationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("OnlinepottenWhereInput", {
  isAbstract: true
})
export class OnlinepottenWhereInput {
  @TypeGraphQL.Field(_type => [OnlinepottenWhereInput], {
    nullable: true
  })
  AND?: OnlinepottenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenWhereInput], {
    nullable: true
  })
  OR?: OnlinepottenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenWhereInput], {
    nullable: true
  })
  NOT?: OnlinepottenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  occasion?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  planned_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hours?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  participants?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  payment_method?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  recipt_id?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationRelationFilter, {
    nullable: true
  })
  application?: ApplicationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  applicationId?: StringFilter | undefined;
}
