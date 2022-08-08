import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationTokenIdentifierTokenCompoundUniqueInput } from "../inputs/VerificationTokenIdentifierTokenCompoundUniqueInput";

@TypeGraphQL.InputType("VerificationTokenWhereUniqueInput", {
  isAbstract: true
})
export class VerificationTokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => VerificationTokenIdentifierTokenCompoundUniqueInput, {
    nullable: true
  })
  identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput | undefined;
}
