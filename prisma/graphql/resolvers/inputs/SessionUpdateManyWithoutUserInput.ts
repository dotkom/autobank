import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyUserInputEnvelope } from "../inputs/SessionCreateManyUserInputEnvelope";
import { SessionCreateOrConnectWithoutUserInput } from "../inputs/SessionCreateOrConnectWithoutUserInput";
import { SessionCreateWithoutUserInput } from "../inputs/SessionCreateWithoutUserInput";
import { SessionScalarWhereInput } from "../inputs/SessionScalarWhereInput";
import { SessionUpdateManyWithWhereWithoutUserInput } from "../inputs/SessionUpdateManyWithWhereWithoutUserInput";
import { SessionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SessionUpdateWithWhereUniqueWithoutUserInput";
import { SessionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SessionUpsertWithWhereUniqueWithoutUserInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class SessionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SessionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SessionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SessionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  set?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  delete?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SessionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SessionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SessionScalarWhereInput[] | undefined;
}
