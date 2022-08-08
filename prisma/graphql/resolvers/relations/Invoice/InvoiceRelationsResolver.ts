import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Invoice } from "../../../models/Invoice";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Invoice)
export class InvoiceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: false
  })
  async application(@TypeGraphQL.Root() invoice: Invoice, @TypeGraphQL.Ctx() ctx: any): Promise<Application> {
    return getPrismaFromContext(ctx).invoice.findUnique({
      where: {
        id: invoice.id,
      },
    }).application({});
  }
}
