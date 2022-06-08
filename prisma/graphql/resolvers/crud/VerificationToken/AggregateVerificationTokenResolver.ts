import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationTokenArgs } from "./args/AggregateVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { AggregateVerificationToken } from "../../outputs/AggregateVerificationToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class AggregateVerificationTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationToken, {
    nullable: false
  })
  async aggregateVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationTokenArgs): Promise<AggregateVerificationToken> {
    return getPrismaFromContext(ctx).verificationToken.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
