import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateInvoiceArgs } from "./args/AggregateInvoiceArgs";
import { Invoice } from "../../../models/Invoice";
import { AggregateInvoice } from "../../outputs/AggregateInvoice";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invoice)
export class AggregateInvoiceResolver {
  @TypeGraphQL.Query(_returns => AggregateInvoice, {
    nullable: false
  })
  async aggregateInvoice(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateInvoiceArgs): Promise<AggregateInvoice> {
    return getPrismaFromContext(ctx).invoice.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
