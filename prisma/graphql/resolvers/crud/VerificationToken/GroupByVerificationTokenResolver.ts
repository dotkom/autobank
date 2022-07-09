import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByVerificationTokenArgs } from "./args/GroupByVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { VerificationTokenGroupBy } from "../../outputs/VerificationTokenGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class GroupByVerificationTokenResolver {
  @TypeGraphQL.Query(_returns => [VerificationTokenGroupBy], {
    nullable: false
  })
  async groupByVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationTokenArgs): Promise<VerificationTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
