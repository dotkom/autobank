import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceAvgAggregate } from "../outputs/InvoiceAvgAggregate";
import { InvoiceCountAggregate } from "../outputs/InvoiceCountAggregate";
import { InvoiceMaxAggregate } from "../outputs/InvoiceMaxAggregate";
import { InvoiceMinAggregate } from "../outputs/InvoiceMinAggregate";
import { InvoiceSumAggregate } from "../outputs/InvoiceSumAggregate";

@TypeGraphQL.ObjectType("InvoiceGroupBy", {
  isAbstract: true
})
export class InvoiceGroupBy {
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
  po_nr!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  duedays!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  applicationId!: string;

  @TypeGraphQL.Field(_type => InvoiceCountAggregate, {
    nullable: true
  })
  _count!: InvoiceCountAggregate | null;

  @TypeGraphQL.Field(_type => InvoiceAvgAggregate, {
    nullable: true
  })
  _avg!: InvoiceAvgAggregate | null;

  @TypeGraphQL.Field(_type => InvoiceSumAggregate, {
    nullable: true
  })
  _sum!: InvoiceSumAggregate | null;

  @TypeGraphQL.Field(_type => InvoiceMinAggregate, {
    nullable: true
  })
  _min!: InvoiceMinAggregate | null;

  @TypeGraphQL.Field(_type => InvoiceMaxAggregate, {
    nullable: true
  })
  _max!: InvoiceMaxAggregate | null;
}
