import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCountAggregate } from "../outputs/ApplicationCountAggregate";
import { ApplicationMaxAggregate } from "../outputs/ApplicationMaxAggregate";
import { ApplicationMinAggregate } from "../outputs/ApplicationMinAggregate";

@TypeGraphQL.ObjectType("ApplicationGroupBy", {
  isAbstract: true
})
export class ApplicationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  full_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  approved_at!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approvedById!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  last_updated!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  responsible_unit!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  error_fields!: string[] | null;

  @TypeGraphQL.Field(_type => ApplicationCountAggregate, {
    nullable: true
  })
  _count!: ApplicationCountAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationMinAggregate, {
    nullable: true
  })
  _min!: ApplicationMinAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationMaxAggregate, {
    nullable: true
  })
  _max!: ApplicationMaxAggregate | null;
}
