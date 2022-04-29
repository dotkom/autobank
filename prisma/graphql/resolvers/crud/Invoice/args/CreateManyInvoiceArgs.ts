import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { InvoiceCreateManyInput } from "../../../inputs/InvoiceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyInvoiceArgs {
  @TypeGraphQL.Field(_type => [InvoiceCreateManyInput], {
    nullable: false
  })
  data!: InvoiceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
