import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VerificationTokenCountAggregate } from "../outputs/VerificationTokenCountAggregate";
import { VerificationTokenMaxAggregate } from "../outputs/VerificationTokenMaxAggregate";
import { VerificationTokenMinAggregate } from "../outputs/VerificationTokenMinAggregate";

@TypeGraphQL.ObjectType("AggregateVerificationToken", {
  isAbstract: true
})
export class AggregateVerificationToken {
  @TypeGraphQL.Field(_type => VerificationTokenCountAggregate, {
    nullable: true
  })
  _count!: VerificationTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => VerificationTokenMinAggregate, {
    nullable: true
  })
  _min!: VerificationTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => VerificationTokenMaxAggregate, {
    nullable: true
  })
  _max!: VerificationTokenMaxAggregate | null;
}
