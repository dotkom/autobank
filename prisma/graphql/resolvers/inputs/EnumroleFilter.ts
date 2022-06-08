import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumroleFilter } from "../inputs/NestedEnumroleFilter";
import { role } from "../../enums/role";

@TypeGraphQL.InputType("EnumroleFilter", {
  isAbstract: true
})
export class EnumroleFilter {
  @TypeGraphQL.Field(_type => role, {
    nullable: true
  })
  equals?: "USER" | "ADMIN" | "SUPERADMIN" | undefined;

  @TypeGraphQL.Field(_type => [role], {
    nullable: true
  })
  in?: Array<"USER" | "ADMIN" | "SUPERADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [role], {
    nullable: true
  })
  notIn?: Array<"USER" | "ADMIN" | "SUPERADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumroleFilter, {
    nullable: true
  })
  not?: NestedEnumroleFilter | undefined;
}
