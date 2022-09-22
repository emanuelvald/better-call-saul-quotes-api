import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';

@Injectable()
export class QuoteService extends TypeOrmCrudService<Quote> {
  constructor(@InjectRepository(Quote) QuoteRepository) {
    super(QuoteRepository);
  }
}
