import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReceiptArgs } from "./args/AggregateReceiptArgs";
import { Receipt } from "../../../models/Receipt";
import { AggregateReceipt } from "../../outputs/AggregateReceipt";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Receipt)
export class AggregateReceiptResolver {
  @TypeGraphQL.Query(_returns => AggregateReceipt, {
    nullable: false
  })
  async aggregateReceipt(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReceiptArgs): Promise<AggregateReceipt> {
    return getPrismaFromContext(ctx).receipt.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
