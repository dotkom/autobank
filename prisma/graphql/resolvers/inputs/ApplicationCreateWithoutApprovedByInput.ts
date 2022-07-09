import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateerror_fieldsInput } from "../inputs/ApplicationCreateerror_fieldsInput";
import { InvoiceCreateNestedOneWithoutApplicationInput } from "../inputs/InvoiceCreateNestedOneWithoutApplicationInput";
import { OnlinepottenCreateNestedOneWithoutApplicationInput } from "../inputs/OnlinepottenCreateNestedOneWithoutApplicationInput";
import { ReceiptCreateNestedOneWithoutApplicationInput } from "../inputs/ReceiptCreateNestedOneWithoutApplicationInput";
import { UserCreateNestedOneWithoutApplicationsInput } from "../inputs/UserCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("ApplicationCreateWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationCreateWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutApplicationsInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  full_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  approved_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_updated?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  responsible_unit?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comments?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  error?: string | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateerror_fieldsInput, {
    nullable: true
  })
  error_fields?: ApplicationCreateerror_fieldsInput | undefined;

  @TypeGraphQL.Field(_type => ReceiptCreateNestedOneWithoutApplicationInput, {
    nullable: true
  })
  Receipt?: ReceiptCreateNestedOneWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenCreateNestedOneWithoutApplicationInput, {
    nullable: true
  })
  Onlinepotten?: OnlinepottenCreateNestedOneWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => InvoiceCreateNestedOneWithoutApplicationInput, {
    nullable: true
  })
  Invoice?: InvoiceCreateNestedOneWithoutApplicationInput | undefined;
}
