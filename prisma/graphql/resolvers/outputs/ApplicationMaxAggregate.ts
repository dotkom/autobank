import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ApplicationMaxAggregate", {
  isAbstract: true
})
export class ApplicationMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  full_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  approved_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approvedById!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  responsible_unit!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error!: string | null;
}
