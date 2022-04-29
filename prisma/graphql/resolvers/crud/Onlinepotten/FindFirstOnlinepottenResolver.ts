import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstOnlinepottenArgs } from "./args/FindFirstOnlinepottenArgs";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class FindFirstOnlinepottenResolver {
  @TypeGraphQL.Query(_returns => Onlinepotten, {
    nullable: true
  })
  async findFirstOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstOnlinepottenArgs): Promise<Onlinepotten | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
