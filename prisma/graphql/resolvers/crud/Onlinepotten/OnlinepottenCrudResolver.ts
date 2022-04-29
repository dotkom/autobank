import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOnlinepottenArgs } from "./args/AggregateOnlinepottenArgs";
import { CreateManyOnlinepottenArgs } from "./args/CreateManyOnlinepottenArgs";
import { CreateOnlinepottenArgs } from "./args/CreateOnlinepottenArgs";
import { DeleteManyOnlinepottenArgs } from "./args/DeleteManyOnlinepottenArgs";
import { DeleteOnlinepottenArgs } from "./args/DeleteOnlinepottenArgs";
import { FindFirstOnlinepottenArgs } from "./args/FindFirstOnlinepottenArgs";
import { FindManyOnlinepottenArgs } from "./args/FindManyOnlinepottenArgs";
import { FindUniqueOnlinepottenArgs } from "./args/FindUniqueOnlinepottenArgs";
import { GroupByOnlinepottenArgs } from "./args/GroupByOnlinepottenArgs";
import { UpdateManyOnlinepottenArgs } from "./args/UpdateManyOnlinepottenArgs";
import { UpdateOnlinepottenArgs } from "./args/UpdateOnlinepottenArgs";
import { UpsertOnlinepottenArgs } from "./args/UpsertOnlinepottenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateOnlinepotten } from "../../outputs/AggregateOnlinepotten";
import { OnlinepottenGroupBy } from "../../outputs/OnlinepottenGroupBy";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class OnlinepottenCrudResolver {
  @TypeGraphQL.Query(_returns => Onlinepotten, {
    nullable: true
  })
  async onlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueOnlinepottenArgs): Promise<Onlinepotten | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [Onlinepotten], {
    nullable: false
  })
  async onlinepottens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyOnlinepottenArgs): Promise<Onlinepotten[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyOnlinepottenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Onlinepotten, {
    nullable: true
  })
  async deleteOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnlinepottenArgs): Promise<Onlinepotten | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyOnlinepottenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyOnlinepottenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Onlinepotten, {
    nullable: false
  })
  async upsertOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnlinepottenArgs): Promise<Onlinepotten> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).onlinepotten.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateOnlinepotten, {
    nullable: false
  })
  async aggregateOnlinepotten(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOnlinepottenArgs): Promise<AggregateOnlinepotten> {
    return getPrismaFromContext(ctx).onlinepotten.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
