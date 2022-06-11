import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOnlinepottenArgs } from "./args/CreateOnlinepottenArgs";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class CreateOnlinepottenResolver {
  @TypeGraphQL.Mutation(_returns => Onlinepotten, {
    nullable: false
  })
  async createOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnlinepottenArgs): Promise<Onlinepotten> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
