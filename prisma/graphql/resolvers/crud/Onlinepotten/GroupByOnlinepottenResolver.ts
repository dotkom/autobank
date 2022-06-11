import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOnlinepottenArgs } from "./args/GroupByOnlinepottenArgs";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { OnlinepottenGroupBy } from "../../outputs/OnlinepottenGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class GroupByOnlinepottenResolver {
  @TypeGraphQL.Query(_returns => [OnlinepottenGroupBy], {
    nullable: false
  })
  async groupByOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOnlinepottenArgs): Promise<OnlinepottenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
