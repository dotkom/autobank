import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenCreateWithoutApplicationInput } from "../inputs/OnlinepottenCreateWithoutApplicationInput";
import { OnlinepottenUpdateWithoutApplicationInput } from "../inputs/OnlinepottenUpdateWithoutApplicationInput";

@TypeGraphQL.InputType("OnlinepottenUpsertWithoutApplicationInput", {
  isAbstract: true
})
export class OnlinepottenUpsertWithoutApplicationInput {
  @TypeGraphQL.Field(_type => OnlinepottenUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: OnlinepottenUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => OnlinepottenCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: OnlinepottenCreateWithoutApplicationInput;
}
