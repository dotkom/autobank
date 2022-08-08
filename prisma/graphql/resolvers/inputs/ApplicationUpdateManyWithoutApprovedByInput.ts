import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyApprovedByInputEnvelope } from "../inputs/ApplicationCreateManyApprovedByInputEnvelope";
import { ApplicationCreateOrConnectWithoutApprovedByInput } from "../inputs/ApplicationCreateOrConnectWithoutApprovedByInput";
import { ApplicationCreateWithoutApprovedByInput } from "../inputs/ApplicationCreateWithoutApprovedByInput";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyWithWhereWithoutApprovedByInput } from "../inputs/ApplicationUpdateManyWithWhereWithoutApprovedByInput";
import { ApplicationUpdateWithWhereUniqueWithoutApprovedByInput } from "../inputs/ApplicationUpdateWithWhereUniqueWithoutApprovedByInput";
import { ApplicationUpsertWithWhereUniqueWithoutApprovedByInput } from "../inputs/ApplicationUpsertWithWhereUniqueWithoutApprovedByInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateManyWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationUpdateManyWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutApprovedByInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutApprovedByInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpsertWithWhereUniqueWithoutApprovedByInput], {
    nullable: true
  })
  upsert?: ApplicationUpsertWithWhereUniqueWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyApprovedByInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyApprovedByInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ApplicationUpdateWithWhereUniqueWithoutApprovedByInput], {
    nullable: true
  })
  update?: ApplicationUpdateWithWhereUniqueWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateManyWithWhereWithoutApprovedByInput], {
    nullable: true
  })
  updateMany?: ApplicationUpdateManyWithWhereWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApplicationScalarWhereInput[] | undefined;
}
