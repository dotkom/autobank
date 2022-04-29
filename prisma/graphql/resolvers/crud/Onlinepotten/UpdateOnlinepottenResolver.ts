import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOnlinepottenArgs } from "./args/UpdateOnlinepottenArgs";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class UpdateOnlinepottenResolver {
  @TypeGraphQL.Mutation(_returns => Onlinepotten, {
    nullable: true
  })
  async updateOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnlinepottenArgs): Promise<Onlinepotten | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
