import { Injectable } from '@nestjs/common';
import { QuoteRepository } from './quote.repository';
import { Quote } from './quote.entity';
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

  async getRandomQuote() {
    return await this.quoteRepository.getRandomQuote();
  }

  async createOneQuote(createQuoteDto: CreateQuoteDto) {
    return await this.quoteRepository.createOneQuote(createQuoteDto);
  }
}
