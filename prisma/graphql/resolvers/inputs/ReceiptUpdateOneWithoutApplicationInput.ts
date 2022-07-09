import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReceiptCreateOrConnectWithoutApplicationInput } from "../inputs/ReceiptCreateOrConnectWithoutApplicationInput";
import { ReceiptCreateWithoutApplicationInput } from "../inputs/ReceiptCreateWithoutApplicationInput";
import { ReceiptUpdateWithoutApplicationInput } from "../inputs/ReceiptUpdateWithoutApplicationInput";
import { ReceiptUpsertWithoutApplicationInput } from "../inputs/ReceiptUpsertWithoutApplicationInput";
import { ReceiptWhereUniqueInput } from "../inputs/ReceiptWhereUniqueInput";

@TypeGraphQL.InputType("ReceiptUpdateOneWithoutApplicationInput", {
  isAbstract: true
})
export class ReceiptUpdateOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => ReceiptCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: ReceiptCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: ReceiptCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpsertWithoutApplicationInput, {
    nullable: true
  })
  upsert?: ReceiptUpsertWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ReceiptWhereUniqueInput, {
    nullable: true
  })
  connect?: ReceiptWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpdateWithoutApplicationInput, {
    nullable: true
  })
  update?: ReceiptUpdateWithoutApplicationInput | undefined;
}
