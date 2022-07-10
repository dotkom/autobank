import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutReceiptInput } from "../inputs/ApplicationCreateOrConnectWithoutReceiptInput";
import { ApplicationCreateWithoutReceiptInput } from "../inputs/ApplicationCreateWithoutReceiptInput";
import { ApplicationUpdateWithoutReceiptInput } from "../inputs/ApplicationUpdateWithoutReceiptInput";
import { ApplicationUpsertWithoutReceiptInput } from "../inputs/ApplicationUpsertWithoutReceiptInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneRequiredWithoutReceiptInput", {
  isAbstract: true
})
export class ApplicationUpdateOneRequiredWithoutReceiptInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutReceiptInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutReceiptInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutReceiptInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutReceiptInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutReceiptInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutReceiptInput | undefined;
}
