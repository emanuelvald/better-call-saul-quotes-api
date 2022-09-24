import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './entities/quote.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(Quote) private quoteRepository: Repository<Quote>,
  ) {}

  async getOneQuoteById(quoteId: number): Promise<Quote> {
    return await this.quoteRepository.findOneBy({ id: quoteId });
  }

  async createOneQuote(newQuote: CreateQuoteDto) {
    return await this.quoteRepository.insert(newQuote);
  }
}
