import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyApprovedByInputEnvelope } from "../inputs/ApplicationCreateManyApprovedByInputEnvelope";
import { ApplicationCreateOrConnectWithoutApprovedByInput } from "../inputs/ApplicationCreateOrConnectWithoutApprovedByInput";
import { ApplicationCreateWithoutApprovedByInput } from "../inputs/ApplicationCreateWithoutApprovedByInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedManyWithoutApprovedByInput", {
  isAbstract: true
})
export class ApplicationCreateNestedManyWithoutApprovedByInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutApprovedByInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutApprovedByInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutApprovedByInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyApprovedByInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyApprovedByInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;
}
