import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OnlinepottenUpdateManyMutationInput } from "../../../inputs/OnlinepottenUpdateManyMutationInput";
import { OnlinepottenWhereInput } from "../../../inputs/OnlinepottenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOnlinepottenArgs {
  @TypeGraphQL.Field(_type => OnlinepottenUpdateManyMutationInput, {
    nullable: false
  })
  data!: OnlinepottenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OnlinepottenWhereInput, {
    nullable: true
  })
  where?: OnlinepottenWhereInput | undefined;
}
