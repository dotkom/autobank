import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("EnumroleFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumroleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  set?: "USER" | "ADMIN" | "SUPERADMIN" | undefined;
}
