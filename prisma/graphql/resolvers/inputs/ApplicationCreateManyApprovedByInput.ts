import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateerror_fieldsInput } from "../inputs/ApplicationCreateerror_fieldsInput";

@TypeGraphQL.InputType("ApplicationCreateManyApprovedByInput", {
  isAbstract: true
})
export class ApplicationCreateManyApprovedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  approved_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  responsible_committee?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error?: string | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateerror_fieldsInput, {
    nullable: true
  })
  error_fields?: ApplicationCreateerror_fieldsInput | undefined;
}
