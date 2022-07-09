import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AccountProviderProviderAccountIdCompoundUniqueInput", {
  isAbstract: true
})
export class AccountProviderProviderAccountIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerAccountId!: string;
}
