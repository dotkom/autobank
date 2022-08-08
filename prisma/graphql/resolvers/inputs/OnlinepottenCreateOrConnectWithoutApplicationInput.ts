import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenCreateWithoutApplicationInput } from "../inputs/OnlinepottenCreateWithoutApplicationInput";
import { OnlinepottenWhereUniqueInput } from "../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.InputType("OnlinepottenCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class OnlinepottenCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: false
  })
  where!: OnlinepottenWhereUniqueInput;

  @TypeGraphQL.Field(_type => OnlinepottenCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: OnlinepottenCreateWithoutApplicationInput;
}
