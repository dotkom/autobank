import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyMutationInput } from "../inputs/AccountUpdateManyMutationInput";

@TypeGraphQL.InputType("AccountUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class AccountUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => AccountScalarWhereInput, {
    nullable: false
  })
  where!: AccountScalarWhereInput;

  @TypeGraphQL.Field(_type => AccountUpdateManyMutationInput, {
    nullable: false
  })
  data!: AccountUpdateManyMutationInput;
}
