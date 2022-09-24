import { Injectable } from '@nestjs/common';
import { QuoteRepository } from "./quote.repository";
import { Quote } from './entities/quote.entity';


@Injectable()
export class QuoteService {
  constructor(private quoteRepository: QuoteRepository) {
  }

  async getOneQuoteById(quoteId: number): Promise<Quote> {
    return await this.quoteRepository.getOneQuoteById(quoteId)
  }
}
