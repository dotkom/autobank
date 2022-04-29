import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceAvgAggregate } from "../outputs/InvoiceAvgAggregate";
import { InvoiceCountAggregate } from "../outputs/InvoiceCountAggregate";
import { InvoiceMaxAggregate } from "../outputs/InvoiceMaxAggregate";
import { InvoiceMinAggregate } from "../outputs/InvoiceMinAggregate";
import { InvoiceSumAggregate } from "../outputs/InvoiceSumAggregate";

@TypeGraphQL.ObjectType("AggregateInvoice", {
  isAbstract: true
})
export class AggregateInvoice {
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
