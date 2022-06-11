import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountProviderProviderAccountIdCompoundUniqueInput } from "../inputs/AccountProviderProviderAccountIdCompoundUniqueInput";

@TypeGraphQL.InputType("AccountWhereUniqueInput", {
  isAbstract: true
})
export class AccountWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => AccountProviderProviderAccountIdCompoundUniqueInput, {
    nullable: true
  })
  provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput | undefined;
}
