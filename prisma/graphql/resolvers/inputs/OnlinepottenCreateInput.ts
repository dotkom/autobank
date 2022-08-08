import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutOnlinepottenInput } from "../inputs/ApplicationCreateNestedOneWithoutOnlinepottenInput";
import { OnlinepottenCreateparticipantsInput } from "../inputs/OnlinepottenCreateparticipantsInput";

@TypeGraphQL.InputType("OnlinepottenCreateInput", {
  isAbstract: true
})
export class OnlinepottenCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  occasion!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  planned_date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hours!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => OnlinepottenCreateparticipantsInput, {
    nullable: true
  })
  participants?: OnlinepottenCreateparticipantsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  recipt_id?: number | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutOnlinepottenInput, {
    nullable: false
  })
  application!: ApplicationCreateNestedOneWithoutOnlinepottenInput;
}
