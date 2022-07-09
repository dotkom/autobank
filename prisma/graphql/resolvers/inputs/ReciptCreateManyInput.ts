import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReciptCreateManyInput", {
  isAbstract: true
})
export class ReciptCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  reimbursement!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  account_nr?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  card?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  paid_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  appendix!: Buffer;
}
