import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyUserInputEnvelope } from "../inputs/ApplicationCreateManyUserInputEnvelope";
import { ApplicationCreateOrConnectWithoutUserInput } from "../inputs/ApplicationCreateOrConnectWithoutUserInput";
import { ApplicationCreateWithoutUserInput } from "../inputs/ApplicationCreateWithoutUserInput";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyWithWhereWithoutUserInput } from "../inputs/ApplicationUpdateManyWithWhereWithoutUserInput";
import { ApplicationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ApplicationUpdateWithWhereUniqueWithoutUserInput";
import { ApplicationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ApplicationUpsertWithWhereUniqueWithoutUserInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ApplicationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutUserInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ApplicationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  set?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  delete?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ApplicationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ApplicationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApplicationScalarWhereInput[] | undefined;
}
