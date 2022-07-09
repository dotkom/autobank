import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";

@TypeGraphQL.ObjectType("Invoice", {
  isAbstract: true
})
export class Invoice {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orgnr!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  method!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  po_nr?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  duedays!: number;

  application?: Application;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;
}
