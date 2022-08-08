import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("InvoiceMinAggregate", {
  isAbstract: true
})
export class InvoiceMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orgnr!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occasion!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  method!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  po_nr!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duedays!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applicationId!: string | null;
}
