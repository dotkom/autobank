import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOnlinepottenArgs } from "./args/AggregateOnlinepottenArgs";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { AggregateOnlinepotten } from "../../outputs/AggregateOnlinepotten";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class AggregateOnlinepottenResolver {
  @TypeGraphQL.Query(_returns => AggregateOnlinepotten, {
    nullable: false
  })
  async aggregateOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOnlinepottenArgs): Promise<AggregateOnlinepotten> {
    return getPrismaFromContext(ctx).onlinepotten.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
