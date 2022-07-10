import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutReceiptInput } from "../inputs/ApplicationCreateWithoutReceiptInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateOrConnectWithoutReceiptInput", {
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutReceiptInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutReceiptInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutReceiptInput;
}
