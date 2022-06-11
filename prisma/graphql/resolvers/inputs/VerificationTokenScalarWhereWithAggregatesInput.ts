import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("VerificationTokenScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class VerificationTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VerificationTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  identifier?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  expires?: DateTimeWithAggregatesFilter | undefined;
}
