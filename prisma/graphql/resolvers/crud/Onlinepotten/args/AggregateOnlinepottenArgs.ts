import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenOrderByWithRelationInput } from "../../../inputs/OnlinepottenOrderByWithRelationInput";
import { OnlinepottenWhereInput } from "../../../inputs/OnlinepottenWhereInput";
import { OnlinepottenWhereUniqueInput } from "../../../inputs/OnlinepottenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  where?: OnlinepottenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OnlinepottenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OnlinepottenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OnlinepottenWhereUniqueInput, {
    nullable: true
  })
  cursor?: OnlinepottenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
