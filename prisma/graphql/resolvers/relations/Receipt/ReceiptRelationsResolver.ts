import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Receipt } from "../../../models/Receipt";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Receipt)
export class ReceiptRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: false
  })
  async application(@TypeGraphQL.Root() receipt: Receipt, @TypeGraphQL.Ctx() ctx: any): Promise<Application> {
    return getPrismaFromContext(ctx).receipt.findUnique({
      where: {
        id: receipt.id,
      },
    }).application({});
  }
}
