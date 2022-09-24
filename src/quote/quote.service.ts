import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './entities/quote.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuoteService {
  constructor(private quoteRepository: QuoteRepository) {}

  async getAllQuotes(): Promise<Quote[]> {
    return await this.quoteRepository.getAllQuotes();
  }

  async getOneQuoteById(quoteId: number): Promise<Quote> {
    return await this.quoteRepository.getOneQuoteById(quoteId);
  }

  async createOneQuote(quoteDto: CreateQuoteDto) {
    return await this.quoteRepository.createOneQuote(quoteDto);
  }
}
