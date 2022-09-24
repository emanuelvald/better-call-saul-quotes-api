import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './entities/quote.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuoteService {
  constructor(private quoteRepository: QuoteRepository) {}

  async getOneQuoteById(quoteId: number): Promise<Quote> {
    return await this.quoteRepository.getOneQuoteById(quoteId);
  }

  async createOneQuote(newQuote: CreateQuoteDto) {
    return await this.quoteRepository.createOneQuote(newQuote);
  }
}
