import { Column, Unique } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Unique('quote_unique', ['message', 'author'])
export class CreateQuoteDto {
  @Column()
  @IsString()
  @IsNotEmpty()
  message: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  author: string;
}
