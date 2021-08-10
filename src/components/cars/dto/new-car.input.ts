import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class NewCarInput {
  @Field()
  name: string;

  @Field()
  dailyPrice: number;

  @Field()
  discount: number;

  @Field()
  type: string;

  @Field()
  model: string;

  @Field()
  VIN: number;

}
