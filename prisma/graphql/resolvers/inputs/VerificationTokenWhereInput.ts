import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("VerificationTokenWhereInput", {
  isAbstract: true
})
export class VerificationTokenWhereInput {
  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  AND?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  OR?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
    nullable: true
  })
  NOT?: VerificationTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expires?: DateTimeFilter | undefined;
}
