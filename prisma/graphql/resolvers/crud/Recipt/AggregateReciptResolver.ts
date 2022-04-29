import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReciptArgs } from "./args/AggregateReciptArgs";
import { Recipt } from "../../../models/Recipt";
import { AggregateRecipt } from "../../outputs/AggregateRecipt";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Recipt)
export class AggregateReciptResolver {
  @TypeGraphQL.Query(_returns => AggregateRecipt, {
    nullable: false
  })
  async aggregateRecipt(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReciptArgs): Promise<AggregateRecipt> {
    return getPrismaFromContext(ctx).recipt.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
