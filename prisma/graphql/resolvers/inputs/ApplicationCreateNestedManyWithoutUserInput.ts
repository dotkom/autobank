import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyUserInputEnvelope } from "../inputs/ApplicationCreateManyUserInputEnvelope";
import { ApplicationCreateOrConnectWithoutUserInput } from "../inputs/ApplicationCreateOrConnectWithoutUserInput";
import { ApplicationCreateWithoutUserInput } from "../inputs/ApplicationCreateWithoutUserInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ApplicationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutUserInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;
}
