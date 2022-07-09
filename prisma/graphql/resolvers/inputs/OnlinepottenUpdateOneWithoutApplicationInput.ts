import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OnlinepottenCreateOrConnectWithoutApplicationInput } from "../inputs/OnlinepottenCreateOrConnectWithoutApplicationInput";
import { OnlinepottenCreateWithoutApplicationInput } from "../inputs/OnlinepottenCreateWithoutApplicationInput";
import { OnlinepottenUpdateWithoutApplicationInput } from "../inputs/OnlinepottenUpdateWithoutApplicationInput";
import { OnlinepottenUpsertWithoutApplicationInput } from "../inputs/OnlinepottenUpsertWithoutApplicationInput";
import { OnlinepottenWhereUniqueInput } from "../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.InputType("OnlinepottenUpdateOneWithoutApplicationInput", {
  isAbstract: true
})
export class OnlinepottenUpdateOneWithoutApplicationInput {
  @TypeGraphQL.Field(_type => OnlinepottenCreateWithoutApplicationInput, {
    nullable: true
  })
  create?: OnlinepottenCreateWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenCreateOrConnectWithoutApplicationInput, {
    nullable: true
  })
  connectOrCreate?: OnlinepottenCreateOrConnectWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenUpsertWithoutApplicationInput, {
    nullable: true
  })
  upsert?: OnlinepottenUpsertWithoutApplicationInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: true
  })
  connect?: OnlinepottenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenUpdateWithoutApplicationInput, {
    nullable: true
  })
  update?: OnlinepottenUpdateWithoutApplicationInput | undefined;
}
