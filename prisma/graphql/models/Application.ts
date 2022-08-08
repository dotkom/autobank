import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Invoice } from "../models/Invoice";
import { Onlinepotten } from "../models/Onlinepotten";
import { Receipt } from "../models/Receipt";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Application", {
  isAbstract: true
})
export class Application {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  user?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fullname!: string;

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
  approved_at?: Date | null;

  approvedBy?: User | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  approvedById?: string | null;

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
  responsible_committee!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error?: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  error_fields!: string[];

  Receipt?: Receipt | null;

  Onlinepotten?: Onlinepotten | null;

  Invoice?: Invoice | null;
}
