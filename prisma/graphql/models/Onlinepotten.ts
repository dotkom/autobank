import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";

@TypeGraphQL.ObjectType("Onlinepotten", {
  isAbstract: true
})
export class Onlinepotten {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  planned_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hours!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  participants!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payment_method!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recipt_id?: number | null;

  application?: Application;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;
}
