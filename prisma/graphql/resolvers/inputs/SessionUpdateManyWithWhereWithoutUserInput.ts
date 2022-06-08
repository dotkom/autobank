import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionScalarWhereInput } from "../inputs/SessionScalarWhereInput";
import { SessionUpdateManyMutationInput } from "../inputs/SessionUpdateManyMutationInput";

@TypeGraphQL.InputType("SessionUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class SessionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => SessionScalarWhereInput, {
    nullable: false
  })
  where!: SessionScalarWhereInput;

  @TypeGraphQL.Field(_type => SessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SessionUpdateManyMutationInput;
}
