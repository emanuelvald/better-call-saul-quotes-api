import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
@Unique('quote_unique', ['message', 'author'])
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  @IsNotEmpty()
  message: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  author: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
