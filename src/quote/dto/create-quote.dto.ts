import { Column } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

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
