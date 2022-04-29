import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionOrderByWithRelationInput } from "../../../inputs/SessionOrderByWithRelationInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
import { SessionScalarFieldEnum } from "../../../../enums/SessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySessionArgs {
  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  where?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SessionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SessionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sessionToken" | "userId" | "expires"> | undefined;
}
