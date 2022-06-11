import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateManyUserInput } from "../inputs/AccountCreateManyUserInput";

@TypeGraphQL.InputType("AccountCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class AccountCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [AccountCreateManyUserInput], {
    nullable: false
  })
  data!: AccountCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
