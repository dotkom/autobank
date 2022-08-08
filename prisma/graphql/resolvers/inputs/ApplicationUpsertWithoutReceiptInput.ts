import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutReceiptInput } from "../inputs/ApplicationCreateWithoutReceiptInput";
import { ApplicationUpdateWithoutReceiptInput } from "../inputs/ApplicationUpdateWithoutReceiptInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutReceiptInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutReceiptInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutReceiptInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutReceiptInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutReceiptInput;
}
