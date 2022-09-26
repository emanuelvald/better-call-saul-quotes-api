import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';
import { CreateQuoteDto } from './dto/create-quote.dto';

@Injectable()
export class QuoteRepository {
  constructor(
    @InjectRepository(Quote) private quoteRepository: Repository<Quote>,
  ) {}

  async getAllQuotes(): Promise<Quote[]> {
    return await this.quoteRepository
      .find({
        select: ['message', 'author'],
        order: { id: 'ASC' },
      })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async getOneQuoteById(quoteId: number): Promise<Quote> {
    return await this.quoteRepository
      .findOneBy({ id: quoteId })
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async getRandomQuote() {
    return await this.quoteRepository
      .createQueryBuilder()
      .select(['quotes.message', 'quotes.author'])
      .from(Quote, 'quotes')
      .orderBy('RANDOM()')
      .limit(1)
      .execute()
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }

  async createOneQuote(quoteDto: CreateQuoteDto) {
    return await this.quoteRepository
      .save(quoteDto /*, { reload: true }*/)
      .catch((error) => {
        throw new BadRequestException({
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: `${error.code} ${error.detail}`,
          error: 'Internal Server Error',
        });
      });
  }
}
