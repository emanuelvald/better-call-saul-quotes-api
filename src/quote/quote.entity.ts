import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity('quotes')
@Unique('quo_unique', ['message', 'author'])
export class Quote {
  @PrimaryGeneratedColumn({ name: 'quo_id' })
  @IsNumber()
  id: number;

  @Column({ name: 'quo_message', type: 'text' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @Column({ name: 'quo_author', type: 'text' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @CreateDateColumn({
    name: 'quo_created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'quo_updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
