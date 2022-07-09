import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateerror_fieldsInput } from "../inputs/ApplicationUpdateerror_fieldsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InvoiceUpdateOneWithoutApplicationInput } from "../inputs/InvoiceUpdateOneWithoutApplicationInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OnlinepottenUpdateOneWithoutApplicationInput } from "../inputs/OnlinepottenUpdateOneWithoutApplicationInput";
import { ReceiptUpdateOneWithoutApplicationInput } from "../inputs/ReceiptUpdateOneWithoutApplicationInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutApprovedApplicationsInput } from "../inputs/UserUpdateOneWithoutApprovedApplicationsInput";

@TypeGraphQL.InputType("ApplicationUpdateWithoutUserInput", {
  isAbstract: true
})
export class ApplicationUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  full_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  approved_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutApprovedApplicationsInput, {
    nullable: true
  })
  approvedBy?: UserUpdateOneWithoutApprovedApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_updated?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  responsible_unit?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  comments?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  error?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateerror_fieldsInput, {
    nullable: true
  })
  error_fields?: ApplicationUpdateerror_fieldsInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptUpdateOneWithoutApplicationInput, {
    nullable: true
  })
  Receipt?: ReceiptUpdateOneWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenUpdateOneWithoutApplicationInput, {
    nullable: true
  })
  Onlinepotten?: OnlinepottenUpdateOneWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceUpdateOneWithoutApplicationInput, {
    nullable: true
  })
  Invoice?: InvoiceUpdateOneWithoutApplicationInput | undefined;
}
