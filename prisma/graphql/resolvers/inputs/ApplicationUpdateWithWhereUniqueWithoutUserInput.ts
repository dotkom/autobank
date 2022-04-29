import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateWithoutUserInput } from "../inputs/ApplicationUpdateWithoutUserInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ApplicationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ApplicationUpdateWithoutUserInput;
}
