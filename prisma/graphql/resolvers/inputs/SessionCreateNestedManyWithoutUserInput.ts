import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyUserInputEnvelope } from "../inputs/SessionCreateManyUserInputEnvelope";
import { SessionCreateOrConnectWithoutUserInput } from "../inputs/SessionCreateOrConnectWithoutUserInput";
import { SessionCreateWithoutUserInput } from "../inputs/SessionCreateWithoutUserInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class SessionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SessionCreateWithoutUserInput], {
    nullable: true
  })
  create?: SessionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SessionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionWhereUniqueInput[] | undefined;
}
