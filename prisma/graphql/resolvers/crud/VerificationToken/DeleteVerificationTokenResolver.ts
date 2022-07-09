import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteVerificationTokenArgs } from "./args/DeleteVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class DeleteVerificationTokenResolver {
  @TypeGraphQL.Mutation(_returns => VerificationToken, {
    nullable: true
  })
  async deleteVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteVerificationTokenArgs): Promise<VerificationToken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
