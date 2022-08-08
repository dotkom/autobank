import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Invoice } from "../../../models/Invoice";
import { Onlinepotten } from "../../../models/Onlinepotten";
import { Receipt } from "../../../models/Receipt";
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

  @TypeGraphQL.FieldResolver(_type => Receipt, {
    nullable: true
  })
  async Receipt(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Receipt | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).Receipt({});
  }

  @TypeGraphQL.FieldResolver(_type => Onlinepotten, {
    nullable: true
  })
  async Onlinepotten(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Onlinepotten | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).Onlinepotten({});
  }

  @TypeGraphQL.FieldResolver(_type => Invoice, {
    nullable: true
  })
  async Invoice(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Invoice | null> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).Invoice({});
  }
}
