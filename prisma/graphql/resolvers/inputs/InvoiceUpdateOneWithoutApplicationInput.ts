import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { InvoiceCreateOrConnectWithoutApplicationInput } from "../inputs/InvoiceCreateOrConnectWithoutApplicationInput";
import { InvoiceCreateWithoutApplicationInput } from "../inputs/InvoiceCreateWithoutApplicationInput";
import { InvoiceUpdateWithoutApplicationInput } from "../inputs/InvoiceUpdateWithoutApplicationInput";
import { InvoiceUpsertWithoutApplicationInput } from "../inputs/InvoiceUpsertWithoutApplicationInput";
import { InvoiceWhereUniqueInput } from "../inputs/InvoiceWhereUniqueInput";

@TypeGraphQL.InputType("InvoiceUpdateOneWithoutApplicationInput", {
  isAbstract: true
})
export class InvoiceUpdateOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => InvoiceCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: InvoiceCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: InvoiceCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceUpsertWithoutApplicationInput, {
    nullable: true
  })
  upsert?: InvoiceUpsertWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => InvoiceWhereUniqueInput, {
    nullable: true
  })
  connect?: InvoiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceUpdateWithoutApplicationInput, {
    nullable: true
  })
  update?: InvoiceUpdateWithoutApplicationInput | undefined;
}
