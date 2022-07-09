import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Onlinepotten)
export class OnlinepottenRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: false
  })
  async application(@TypeGraphQL.Root() onlinepotten: Onlinepotten, @TypeGraphQL.Ctx() ctx: any): Promise<Application> {
    return getPrismaFromContext(ctx).onlinepotten.findUnique({
      where: {
        id: onlinepotten.id,
      },
    }).application({});
  }
}
