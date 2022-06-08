import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReciptUpdateManyMutationInput } from "../../../inputs/ReciptUpdateManyMutationInput";
import { ReciptWhereInput } from "../../../inputs/ReciptWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReciptArgs {
  @TypeGraphQL.Field(_type => ReciptUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReciptUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReciptWhereInput, {
    nullable: true
  })
  where?: ReciptWhereInput | undefined;
}
