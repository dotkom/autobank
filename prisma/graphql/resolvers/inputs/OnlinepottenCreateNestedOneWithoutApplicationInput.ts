import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenCreateOrConnectWithoutApplicationInput } from "../inputs/OnlinepottenCreateOrConnectWithoutApplicationInput";
import { OnlinepottenCreateWithoutApplicationInput } from "../inputs/OnlinepottenCreateWithoutApplicationInput";
import { OnlinepottenWhereUniqueInput } from "../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.InputType("OnlinepottenCreateNestedOneWithoutApplicationInput", {
  isAbstract: true
})
export class OnlinepottenCreateNestedOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => OnlinepottenCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: OnlinepottenCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: OnlinepottenCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: true
  })
  connect?: OnlinepottenWhereUniqueInput | undefined;
}
