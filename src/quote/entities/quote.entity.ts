import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity()
@Unique('quote_unique', ['message', 'author'])
export class Quote {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column({ type: 'text' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @Column({ type: 'text' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
