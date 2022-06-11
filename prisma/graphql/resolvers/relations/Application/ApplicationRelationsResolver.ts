import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class ApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async user(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async approvedBy(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).approvedBy({});
  }
}
